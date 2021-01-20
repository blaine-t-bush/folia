<template>
    <form @submit.prevent="uploadAvatar">
        <div class="select-file">
            <div class="select-file-prompt">Select File</div>
            <img class="select-file-image" id="avatar_file_preview" src="" />
            <input type="file" name="avatar_file" id="avatar_file">
        </div>

        <input type="submit" value="Upload >>>" class="heavy-button">

        <div>
            {{ error }}
        </div>

        <div>
            {{ message }}
        </div>
    </form>    
</template>

<script>
const validateAvatarFile = avatarFile => {
    if (!avatarFile) {
        return { valid: false, error: 'Must select a file' };
    }

    let allowedExtensions = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
    if (!allowedExtensions.includes(avatarFile.type)) {
        return { valid: false, error: 'File must be one of the following types: .jpg, .jpeg, .png, .gif' };
    }

    if (avatarFile.size > 1048576) { // Using the largest definition of a megabyte.
        return { valid: false, error: 'File must be smaller than 1 MB' };
    }

    return { valid: true, error: null };
}

export default {
    emits: [
        'avatarUploaded',
    ],
    methods: {
        uploadAvatar(event) {
            // Reset messages.
            this.error = null;
            this.message = null;

            // Validate the data.
            let file = document.getElementById('avatar_file').files[0];
            const validFile = validateAvatarFile(file);

            if (!validFile.valid) {
                this.error = validFile.error;
                return false;
            }

            // Populate the image preview.

            // Update form to convey that upload is being processed.
            this.message = 'Uploading image...'
            
            // Format the file for request.
            let formData = new FormData();
            formData.append('avatar_file', file);
            
            // Send request to upload file and update avatar URL.
            axios.post('/api/user', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                if (response.status != 200) {
                    // Error. Update message.
                    this.message = 'Error uploading image. Please refresh the page and try again.'
                } else {
                    // Request succeeded. Update the avatar image on this page.
                    this.$emit('avatarUploaded', response.data.avatar_url);
                    this.message = 'Image succesfully uploaded!'
                }
            });
        }
    },
    mounted() {
        const reader = new FileReader();
        reader.onload = event => {
            document.getElementById('avatar_file_preview').src = event.target.result;
        }
        
        document.getElementById('avatar_file').onchange = event => {
            let file = document.getElementById('avatar_file').files[0]; // FIXME change order to validation -> preview -> click submit -> upload.
            reader.readAsDataURL(file);
        }
    },
    data() {
        return {
            error: null,
            message: null,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../sass/vars';

    .select-file {
        border: 2px solid $color-confirm;
        color: $color-confirm;
        font-weight: bold;
        padding: 0 0.3em;

        &:focus, &:hover {
            background-color: $color-confirm-dark;
            border: 2px solid $color-confirm-light;
            color: $color-confirm-light;
        }

        display: flex;
        justify-content: space-between;
        position: relative;

        &-prompt {
            height: 1.6em;
            line-height: 1.6em;
        }

        &-image {
            display: block;
            height: 120px;
            width: 120px;
            object-fit: contain;
            padding: 0.3em 0;
        }

        input {
            width: 100%;
            height: 100%;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>