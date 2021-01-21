<template>
    <form @submit.prevent>
        <button class="select-file heavy-button">
            <div>Select File...</div>
            <input type="file" name="avatar_file" id="avatar_file">
            <img id="avatar_file_preview" src="/images/file_upload.png" />
        </button>

        <button @click="uploadAvatar" class="upload-file heavy-button">Upload >>></button>
    </form>

    <p>
        {{ error }}
    </p>

    <p>
        {{ message }}
    </p>
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

    if (avatarFile.size > 2*1048576) { // 2 MB. Using the largest definition of a megabyte.
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
        // Populate the image preview on file selection.
        const reader = new FileReader();

        reader.onload = event => {
            document.getElementById('avatar_file_preview').src = event.target.result;
        }

        document.getElementById('avatar_file').onchange = event => {
            // Set the existing preview image to the prompt.
            document.getElementById('avatar_file_preview').src = '/images/file_upload.png';

            // Get the file.
            let file = document.getElementById('avatar_file').files[0]; // FIXME change order to validation -> preview -> click submit -> upload.

            // Validate the data.
            const validFile = validateAvatarFile(file);

            if (!validFile.valid) {
                this.error = validFile.error;
                return false;
            } else {
                reader.readAsDataURL(file);
                let preview = document.getElementById('avatar_file_preview');
            }
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

    form {
        display: flex;
    }

    .select-file {
        cursor: pointer;
        display: block;
        width: fit-content;
        position: relative;
        margin-right: 0.5em;
        padding: 0.3em;

        img {
            border: 1px solid $color-post-accent;
            display: block;
            height: auto;
            width: 160px;
            // object-fit: cover; // FIXME cover appears not to be working on Chrome on Android with image from camera. Could have something to do with orientation data.
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

    .upload-file {
        height: 1.6em;

        @media (max-width: 380px) {
            position: absolute;
            right: 0;
        }
    }
</style>