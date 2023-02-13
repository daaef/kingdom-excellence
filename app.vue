<template>
  <div>
  <header class="relative overflow-hidden bg-gray-900">
    <div class="mx-auto max-w-7xl h-full">
      <div class="relative flex items-center z-10 h-full bg-gray-900 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="rgb(17 24 39)" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main class="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Purchase your</span>
              {{ ' ' }}
              <span class="block text-indigo-600 xl:inline">Dream House!</span>
            </h1>
            <p class="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Get started</a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Live demo</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="/estate.jpg" alt="" />
    </div>
  </header>
    <main class="form--container mt-28">
        <div class="container">
        <div class="space-y-8 divide-y divide-gray-200">
            <div class="space-y-8 divide-y divide-gray-200">
                <div>
                    <FormKit
                            type="form"
                            id="registration-example"
                            :form-class="submitted ? 'hide' : 'show'"
                            submit-label="Register"
                            @submit="submitHandler"
                            :actions="false"
                            #default="{ value }"
                    >
                        <div>
                            <h3 class="text-2xl font-medium leading-6 text-gray-900">Choice of Estate</h3>
                            <hr class="my-4">
                        </div>


                        <div class="grid grid-cols-2 gap-x-10">
                          <FormKit
                                  type="text"
                                  name="name"
                                  label="Estate Name"
                                  placeholder=""
                                  validation="required|length:5,50"
                          />
                          <FormKit
                                  type="text"
                                  name="location"
                                  label="Location"
                                  placeholder=""
                                  help=""
                                  validation="required|length:3,20"
                          />
                        </div>

                        <div class="">
                          <div class="mt-5">
                              <h3 class="text-xl font-medium leading-6 text-gray-900">1. Personal/Organization Details</h3>
                              <hr class="my-4">
                          </div>

                          <div class="grid grid-cols-2 gap-x-10">
                            <FormKit
                                    type="text"
                                    name="surname"
                                    label="Surname/Company Name"
                                    placeholder=""
                                    validation="required|length:5,50"
                            />
                            <FormKit
                                    type="text"
                                    name="otherNames"
                                    label="Other Names"
                                    placeholder=""
                                    help=""
                                    validation="required|length:3,20"
                            />
                            <FormKit
                                    name="birthday"
                                    type="date"
                                    value="2011-01-01"
                                    label="Date of birth"
                                    help="Enter your birth day"
                                    validation="required|date_before:2010-01-01"
                                    validation-visibility="live"
                            />
                            <FormKit
                                    type="text"
                                    name="legalName"
                                    label="Name to be reflected on Legal Documentation"
                                    placeholder=""
                                    help=""
                                    validation="required|length:3,20"
                            />
                          </div>
                          <div class="">
                              <FormKit
                                      name="passport"
                                      type="file"
                                      label="Passport Photograph"
                                      accept=".pdf,.png,.jpg"
                                      help="Max. file size: 1 GB."
                                      :multiple="false"
                              />
                          </div>
                          <div class="">
                              <FormKit
                                      type="textarea"
                                      name="address"
                                      label="Home Address"
                                      rows="10"
                                      placeholder="Remember to write in complete sentences."
                              />
                          </div>
                          <div class="grid grid-cols-2 gap-x-10">
                              <FormKit
                                      type="tel"
                                      label="Phone number"
                                      placeholder="xxx-xxxx-xxxx"
                                      validation="matches:/^[0-9]{3}[0-9]{4}[0-9]{4}$/"
                                      :validation-messages="{
                                        matches: 'Phone number must be in the format xxx-xxxx-xxxx',
                                      }"
                                      validation-visibility="dirty"
                              />
                              <FormKit
                                      type="email"
                                      name="email"
                                      label="Email"
                                      placeholder=""
                                      help=""
                                      validation="required|length:3,20"
                              />
                          </div>
                        </div>

                        <div class="">
                          <div class="mt-5">
                              <h3 class="text-xl font-medium leading-6 text-gray-900">2. Next of Kin Details</h3>
                              <hr class="my-4">
                          </div>
                          <div class="grid grid-cols-2 gap-x-10">
                              <FormKit
                                      type="text"
                                      name="nokName"
                                      label="Name"
                                      placeholder=""
                                      validation="required|length:5,50"
                              />
                              <FormKit
                                      type="text"
                                      name="relationship"
                                      label="Relationship"
                                      placeholder=""
                                      help=""
                                      validation="required|length:3,20"
                              />
                          </div>
                          <div class="">
                              <FormKit
                                      type="textarea"
                                      name="nokAddress"
                                      label="Home Address"
                                      rows="10"
                                      placeholder=""
                              />
                          </div>
                          <div class="mb-10">
                              <FormKit
                                      type="tel"
                                      name="nokPhoneNumber"
                                      label="Phone number"
                                      placeholder="xxx-xxxx-xxxx"
                                      validation="matches:/^[0-9]{3}[0-9]{4}[0-9]{4}$/"
                                      :validation-messages="{
                                        matches: 'Phone number must be in the format xxx-xxxx-xxxx',
                                      }"
                                      validation-visibility="dirty"
                              />
                          </div>
                        </div>

                        <div class="">
                          <div>
                              <h3 class="text-xl font-medium leading-6 text-gray-900">3. Employment Details</h3>
                              <hr class="my-4">
                          </div>
                          <div class="">
                              <FormKit
                                      type="text"
                                      name="empName"
                                      label="Name"
                                      placeholder=""
                                      validation="required|length:5,50"
                              />
                          </div>
                          <div class="">
                              <FormKit
                                      type="textarea"
                                      name="empAddress"
                                      label="Home Address"
                                      rows="10"
                                      placeholder=""
                              />
                          </div>
                          <div class="mb-10">
                              <FormKit
                                      type="tel"
                                      name="empPhoneNumber"
                                      label="Phone number"
                                      placeholder="xxx-xxxx-xxxx"
                                      validation="matches:/^[0-9]{3}[0-9]{4}[0-9]{4}$/"
                                      :validation-messages="{
                                        matches: 'Phone number must be in the format xxx-xxxx-xxxx',
                                      }"
                                      validation-visibility="dirty"
                              />
                          </div>
                        </div>

                        <div class="">
                          <div>
                              <h3 class="text-xl font-medium leading-6 text-gray-900">4. Description of Property</h3>
                              <hr class="my-4">
                          </div>
                          <div class="">
                              <FormKit
                                      type="textarea"
                                      name="propertyDesc"
                                      label="Please Specify Below"
                                      rows="10"
                                      placeholder=""
                              />
                          </div>
                          <div class="mb-10">
                              <FormKit
                                  type="select"
                                  label="Number of Plots"
                                  help="Kindly specify the total number of plots to be purchased above"
                                  name="plots"
                                  :options="Array.from(Array(40), (_, index) => index + 1)"
                              />
                          </div>
                        </div>
                        <div class="">
                          <div>
                              <h3 class="text-xl font-medium leading-6 text-gray-900">5. Payment Plan</h3>
                              <hr class="my-4">
                          </div>
                          <div class="">
                              <FormKit
                                      name="paymentMethod"
                                      type="radio"
                                      label="Please Specify Below"
                                      :options="['Initial Deposit', 'Outright Payment']"
                              />
                          </div>
                          <div class="">
                              <FormKit
                                      type="number"
                                      label="Please Specify Amount Below"
                                      name="amount"
                                      value="0"
                                      step="1"
                              />
                          </div>

                          <div class="" v-if="value?.paymentMethod === 'Initial Deposit'">
                              <FormKit
                                      type="textarea"
                                      name="balanceDuration"
                                      label="Please Specify Balance/Duration of Payment"
                                      rows="10"
                                      placeholder=""
                              />
                          </div>
                        </div>

                        <div class="">
                            <div>
                                <h3 class="text-xl font-medium leading-6 text-gray-900">6. How did you get to know about us?</h3>
                                <hr class="my-4">
                            </div>
                            <div class="">
                                <FormKit
                                        name="howKnow"
                                        type="radio"
                                        label="Please Specify Below"
                                        :options="['Friend', 'Marketer', 'Advert', 'Other']"
                                />
                            </div>
                            <div class="" v-if="value?.howKnow === 'Other'">
                                <FormKit
                                        type="text"
                                        name="howOther"
                                        label="Tell us about it"
                                        placeholder=""
                                        validation="required|length:5,50"
                                />
                            </div>
                            <div class="" v-else-if="value?.howKnow === 'Friend'">
                                <FormKit
                                        type="text"
                                        name="howFriend"
                                        label="Please Provide His/Her Name"
                                        placeholder=""
                                        validation="required|length:5,50"
                                />
                            </div>
                            <div class="" v-else-if="value?.howKnow === 'Advert'">
                                <FormKit
                                        type="text"
                                        name="howAdvert"
                                        label="Please Specify Where you Saw the Advert"
                                        placeholder=""
                                        validation="required|length:5,50"
                                />
                            </div>
                            <div class="" v-else-if="value?.howKnow === 'Marketer'">
                                <FormKit
                                        type="text"
                                        name="howAgentName"
                                        label="Agent/Marketer's Name"
                                        placeholder=""
                                        validation="required|length:5,50"
                                />
                                <FormKit
                                        type="text"
                                        name="howAgentNumber"
                                        label="Agent/Marketer Phone Number"
                                        placeholder=""
                                        validation="required|length:5,50"
                                />
                            </div>
                        </div>

                        <FormKit
                                type="submit"
                                label="Register"
                        />
                        <pre wrap>{{ value }}</pre>
                        <pre wrap>{{ articles }}</pre>
                    </FormKit>
                </div>
            </div>
        </div>
        </div>
    </main>
  </div>
</template>

<script setup>
    import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

    const navigation = [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ]

    const { getItems } = useDirectusItems();

    // const articles = await getItems({ collection: "articles" });
    const {data, pending, error, refresh} = await useAsyncData('articleData', () => {
        return getItems({
            collection: "articles"
        })
    })

    const submitted = ref(false)
    const pref = ref('')
    const submitHandler = async () => {
        // Let's pretend this is an ajax request:
        await new Promise((r) => setTimeout(r, 1000))
        submitted.value = true
    }
</script>

<style>
    header {
            height: 100vh;
            }
    main .formkit-wrapper, .formkit-fieldset {
        max-width: 100%;
    }
</style>