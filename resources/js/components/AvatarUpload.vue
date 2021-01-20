<template>
    <form @submit.prevent="uploadAvatar">
        <input type="file" name="avatar_file" id="avatar_file">
        <input type="submit" value="Upload">
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
    data() {
        return {
            error: null,
            message: null,
        }
    },
}
</script>