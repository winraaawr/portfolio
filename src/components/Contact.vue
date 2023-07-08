<template>
    <div id="contact" class="container flex flex-col py-8 min-h-screen w-full">
        <h1 class="text-display text-3xl text-white font-bold">Contact me</h1>
        <div class="flex flex-col md:flex-row mt-4">
            <div class="flex flex-col w-full space-y-4 py-4 mb-2 md:mr-4 text-display text-white">
                <h2 class="text-xl text-rose-500 font-bold">Socials</h2>
                <div class="flex ">
                    <div class="flex flex-row items-center hover:text-rose-500 transition-all text-sm md:text-base">
                        <EnvelopeIcon class="h-6 w-6 mr-4" />
                        <span>matthewlubi.dev@gmail.com</span>
                    </div>
                </div>
                <div class="flex">
                    <a href="http://linkedin.com/in/john-matthew-lubi-b47570275" target="_blank" rel="noopener noreferrer"
                        class="flex flex-row items-center hover:text-rose-500 transition-all text-sm md:text-base">
                        <font-awesome-icon icon="fa-brands fa-linkedin" class="h-6 w-6 mr-4" />
                        <span>John Matthew Lubi</span>
                    </a>
                </div>
                <div class="flex">
                    <a href="http://" target="_blank" rel="noopener noreferrer"
                        class="flex flex-row items-center hover:text-rose-500 transition-all text-sm md:text-base">
                        <font-awesome-icon icon="fa-brands fa-square-github" class="h-6 w-6 mr-4" />
                        <span>winraaawr</span>
                    </a>
                </div>
            </div>

            <div class="flex flex-col w-full py-4 mb-2 text-sm">

                <!-- form start -->
                <form ref="form" @submit.prevent="submitForm()" id="form-email">
                    <h2 class="text-display text-xl text-rose-500 font-bold mb-4">Send me an e-mail</h2>

                    <div v-if="emailResult.status === 'success'"
                        class="flex flex-row items-center p-4 rounded-md text-display mb-2 bg-green-200 border-2 border-green-500 text-green-800">
                        <CheckCircleIcon class="h-6 w-6 mr-4"/> {{ emailResult.message }}
                    </div>

                    <div v-else-if="emailResult.status === 'failed'"
                        class="flex flex-row items-center p-4 rounded-md text-display mb-2 bg-red-200 border-2 border-red-500 text-red-800">
                        <CheckCircleIcon class="h-6 w-6 mr-4"/> Email cannot be sent due to an error.
                    </div>

                    <div v-else>

                    </div>

                    <div class="flex flex-col space-y-2 mb-4">
                        <label class="text-display text-white" for="name">Your Name</label>
                        <input v-model="formInput.name" @blur="v$.name.$touch" type="text" name="from_name" id="name"
                            class="input-form px-2 py-1.5 rounded-md text-display focus:outline-none focus:ring-2 focus:ring-rose-500">
                        <div v-if="v$.name.$error" class="text-display text-xs text-red-400 flex flex-col space-y-2">
                            <span v-for="error in v$.name.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-2 mb-4">
                        <label class="text-display text-white" for="email">Your Email</label>
                        <input v-model="formInput.email" @blur="v$.email.$touch" type="text" name="from_email" id="email"
                            class="input-form px-2 py-1.5 rounded-md text-display focus:outline-none focus:ring-2 focus:ring-rose-500">
                        <div v-if="v$.email.$error" class="text-display text-xs text-red-400 flex flex-col space-y-2">
                            <span v-for="error in v$.email.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-2 mb-4">
                        <label class="text-display text-white" for="subject">Subject</label>
                        <input v-model="formInput.subject" @blur="v$.subject.$touch" type="text" name="subject" id="subject"
                            class="input-form px-2 py-1.5 rounded-md text-display focus:outline-none focus:ring-2 focus:ring-rose-500">
                        <div v-if="v$.subject.$error" class="text-display text-xs text-red-400 flex flex-col space-y-2">
                            <span v-for="error in v$.subject.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-2 mb-4">
                        <label class="text-display text-white" for="body">Message</label>
                        <textarea v-model="formInput.body" @blur="v$.body.$touch" maxlength="255" id="body" name="message"
                            class="input-form text-display rounded-md resize-none px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                            rows="6">
                        </textarea>
                        <div class="flex flex-row justify-between">
                            <div v-if="v$.body.$error" class="text-display text-xs text-red-400 flex flex-col space-y-2">
                                <span v-for="error in v$.body.$errors" :key="error.$uid">
                                    {{ error.$message }}
                                </span>
                            </div>
                            <span class="text-display text-white/80">{{ formInput.body.length }} / 255</span>
                        </div>
                    </div>

                    <button type="submit" class="text-display text-white text-center w-20 bg-rose-500 py-2 px-3 rounded-md">
                        <span v-show="!loading">Submit</span>
                        <span v-show="loading">
                            <font-awesome-icon :icon="['fas', 'circle-notch']" class="animate-spin" />
                        </span>
                    </button>
                </form>
                <!-- form end -->

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import emailjs from '@emailjs/browser'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/vue/24/solid'


const characters = ref([]);

const formInput = ref({
    name: '',
    email: '',
    subject: '',
    body: '',
});

const form = ref()

const rules = {
    name: {
        required: helpers.withMessage('Name field cannot be empty', required),
    },
    email: {
        required: helpers.withMessage('Email field cannot be empty', required),
        email: helpers.withMessage('Email must be a valid format', email),
    },
    subject: {
        required: helpers.withMessage('Subject field cannot be empty', required),
    },
    body: {
        required: helpers.withMessage('Message field cannot be empty', required),
    },
}

const loading = ref(false)

const v$ = useVuelidate(rules, formInput)

const emailResult = ref({
    status: null,
    message: '',
});

function resetForm(){
    formInput.value.name = ""
    formInput.value.email = ""
    formInput.value.subject = ""
    formInput.value.body = ""
}

const submitForm = async () => {

loading.value = true

const result = await v$.value.$validate();

if (!result) {
    loading.value = false
    return;
}

// continues if valid
try {
    //service id, template id, form values, public key
    const response = await emailjs.sendForm('service_aq745ns', 'template_woi7zqr', form.value , 'hUb9jjXsSLsct5o4B');

    emailResult.value.status = 'success'
    emailResult.value.message = 'Email was successfully sent!'
    loading.value = false
    resetForm()
    v$.value.$reset()
} catch (error) {
    console.log(error)
    emailResult.value.status = 'failed'
    emailResult.message = error.text
    loading.value = false
}
}

</script>
