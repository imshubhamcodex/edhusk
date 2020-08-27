<template>
  <div>
    <section class="top-image">
      <img src="../assets/fore-background.png" alt="Banner Image" class="banner" />
      <!-- <img src="../assets/fore-background.png" alt="Foreground" class="top-banner-vector" /> -->
      <br />
      <br />
      <br />
      <h1 class="has-text-weight-bold">Book your own Tutor</h1>

      <!-- First Dropdown -->
      <div class="field">
        <div class="control category">
          <b-select v-model="category" placeholder="Select category">
            <option value disabled>Select category</option>
            <option v-for="(item, index) in optionsCategory" :key="index" :value="item">{{ item }}</option>
          </b-select>
        </div>
        <!-- second dropdown -->
        <div class="control standard">
          <b-select v-model="formLink" placeholder="Select category first">
            <option value disabled>Select sub category</option>
            <option
              v-for="(item, index) in optionFieldComputed"
              :key="index"
              :value="item.link"
            >{{ item.text }}</option>
          </b-select>
        </div>
      </div>

      <b-button id="submit" tag="a" :href="formLink" class="is-success">Submit</b-button>
    </section>

    <!-- Services section starts here -->
    <section class="services">
      <div class="columns services-col">
        <div class="column col-pad">
          <img src="~assets/idea-img.png" class="services-img" alt />
          <h1 class="services-h1">Academics</h1>
          <br />
          <p class="has-text-justified">
            Experts for all subjects and boards from Pre - Primary to 12th classes,
            Personalised Home/OnlineTuitions,
            learn from customized coursework
          </p>
        </div>
        <div class="column col-pad">
          <img src="~assets/ball-img.png" class="services-img" alt />
          <br />
          <h1 class="services-h1">Sports & Fitness</h1>
          <br />
          <p class="has-text-justified">
            Sculpt an Ideal Body with Yoga/Zumba Get fit with
            our Dieticians and Trainers Popular Indoor
            and Outdoor Games Get a Coach as per to your Needs
          </p>
        </div>
        <div class="column col-pad">
          <img src="~assets/music-img.png" class="services-img" alt />
          <br />
          <h1 class="services-h1">Hobbies & Life-Skills</h1>
          <br />
          <p class="has-text-justified">
            Personality Development Courses All Indian and western
            Instruments Various courses for all Age
            Groups Learn a new Language and skills
          </p>
        </div>
      </div>
    </section>

    <br />
    <br />
    <br />
    <br />

    <!-- card data #START -->
    <div class="columns">
      <div class="column card-col">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>EDHUSK EXPERTS</strong>
                </p>
                <img src="~assets/ed-expert.png" class="image is-64x64 float-l" />
                <h2 class="stat-data">2200+</h2>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="column card-col">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>SATISFIED CUSTOMER</strong>
                </p>
                <img src="~assets/satisfied.png" class="image is-64x64 float-l" />
                <h2 class="stat-data">1200+</h2>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="column card-col">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>HOURS OF TEACHING</strong>
                </p>
                <img src="~assets/teaching-hour.png" class="image is-64x64 float-l" />
                <h2 class="stat-data">31000+</h2>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="column card-col">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>QUIZZES CONDUCTED</strong>
                </p>
                <img src="~assets/quiz.png" class="image is-64x64 float-l" />
                <h2 class="stat-data">2600+</h2>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <!-- card data #END -->
    <br />
    <br />
    <!-- Why EdHusk section starts here -->
    <section class="why-us">
      <p class="is-size-3 has-text-weight-bold has-text-centered subheading">Why Edhusk?</p>
      <br />
      <!-- col1 -->
      <div class="columns is-multiline whyus-coloum">
        <div class="column is-half">
          <div class="card why-us-col">
            <div class="card-image">
              <figure class="image is-128x128 why-us-img-pad">
                <img src="~assets/why-us1.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content content-margin">
              <div class="media-content">
                <p class="title is-5">BEST POSSIBLE MATCH</p>
                <hr class="subtitle is-6 why-us-hr-dash" />
              </div>

              <div
                class="content"
              >We'll connect you with the most qualified and professionals tutors. Selection of our expert is based on your preferences using our advanced matchmaking algorithm. You get to pick your match and the budget.</div>
            </div>
          </div>
        </div>
        <!-- col2 -->
        <div class="column is-half">
          <div class="box card-box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <strong>CUSTOMIZED LEARNING</strong>
                  <hr class="subtitle is-6 why-us-hr-solid" />
                  <p>With our conceptualized course content and 3D models provides better understanding of realistic applications. Continuous improvement, learning with periodic assessment test.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!-- col3 -->
        <div class="column is-half">
          <div class="box card-box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <strong>QUALITY</strong>
                  <hr class="subtitle is-6 why-us-hr-solid" />
                  <p>We do a comprehensive screening of tutors for subject knowledge and teaching abilities before onboarding. You can choose to get tutored either in 1-on-1 or in a batch, to reach your goals.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!-- col4 -->
        <div class="column is-half">
          <div class="card why-us-col">
            <div class="card-image">
              <figure class="image is-128x128 why-us-img-pad">
                <img src="~assets/why-us1.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content content-margin">
              <div class="media-content">
                <p class="title is-5">MONITOR YOUR PROGRESS</p>
                <hr class="subtitle is-6 why-us-hr-dash" />
              </div>
              <div
                class="content"
              >Track students progress online with our android app(Coming Soon). Check there for the attendance and constant tutor feedback. You will also get a detailed report on completed sessions every month, followed by test(s).</div>
            </div>
          </div>
        </div>
        <!-- col5 -->
        <div class="column is-half">
          <div class="card why-us-col">
            <div class="card-image">
              <figure class="image is-128x128 why-us-img-pad">
                <img src="~assets/chat-support.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content content-margin">
              <div class="media-content">
                <p class="title is-5">SUPPORT & COUNSELLING</p>
                <hr class="subtitle is-6 why-us-hr-dash" />
              </div>

              <div
                class="content"
              >We have an able counselling team with the learning environment of highest standard to monitor the progress of students. It is highly unlikely that your tutor is not being able to continue, if such a case arises, we will help you find a quick replacement.</div>
            </div>
          </div>
        </div>
        <!-- col6 -->
        <div class="column is-half">
          <div class="box card-box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <strong>SUPPORT & PAYMENT SECURITY</strong>
                  <hr class="subtitle is-6 why-us-hr-solid" />
                  <p>Guaranteed, personalized and adaptive services with utmost convenience. We have a 12 session payment scheme & 3D secure SSL payment gateway with money security in case of any discrepancies.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- How it works section starts here -->
    <section class="work disp-old">
      <img src="../assets/how-it-works-1.png" alt="How It Works 1" class="image-one" />
      <img src="../assets/how-it-works-2.png" alt="How It Works 2" class="image-two" />
      <img src="../assets/how-it-works-3.png" alt="How It Works 3" class="image-three" />
      <img
        src="../assets/how-it-works-background.png"
        alt="How It Works Background"
        class="image-background"
      />
      <div class="title-block">
        <p class="is-size-3 has-text-weight-bold has-text-centered subheading">How It Works</p>
      </div>
      <div class="text-block text-block-one">
        <h1>Answer a few personalized questions</h1>
        <p>Tell us a few things about yourself and we'll introduce you to experts who are the perfect matches for you.</p>
      </div>
      <div class="text-block text-block-two">
        <h1>Book a demo with your perfect match</h1>
        <p>We will contact you within 24 hours to book a demo class with your perfect match. We guarantee that you'll love your first lesson. If not, we'll cover the first session.</p>
      </div>
      <div class="text-block text-block-three">
        <h1>Accept and Subscribe</h1>
        <p>If you are satisfied with the approach and depth of your instructor's knowledge, you can start one of its kind EdHusk experience.</p>
      </div>
      <div class="section-ladders">
        <div class="start-block">
          <div class="start-triangle" />
        </div>
        <div class="numbered-square number-one">
          <div class="hollow-circle circle-one">
            <p>1</p>
          </div>
        </div>
        <div class="sector sector-one">
          <div class="sector-cut-out sector-cut-out-one" />
        </div>
        <div class="white-square square-one" />
        <div class="white-square square-two" />
        <div class="white-square square-three" />
        <div class="white-square square-four" />
        <div class="white-square square-five" />
        <div class="sector sector-two">
          <div class="sector-cut-out sector-cut-out-two" />
        </div>
        <div class="numbered-square number-two">
          <div class="hollow-circle circle-two">
            <p>2</p>
          </div>
        </div>
        <div class="sector sector-three">
          <div class="sector-cut-out sector-cut-out-three" />
        </div>
        <div class="white-square square-six" />
        <div class="white-square square-seven" />
        <div class="white-square square-eight" />
        <div class="sector sector-four">
          <div class="sector-cut-out sector-cut-out-four" />
        </div>
        <div class="numbered-square number-three">
          <div class="hollow-circle circle-three">
            <p>3</p>
          </div>
        </div>
      </div>
    </section>
    <section class="work disp-new">
      <p class="is-size-3 has-text-weight-bold has-text-centered subheading">How It Works?</p>
      <img
        src="../assets/how-its-work-bg.png"
        alt="How It Works Background"
        class="image-background how-work-img"
      />
      <div class="text-block text-block-one how-work-div1">
        <h1 class="color">Answer a few personalized questions</h1>
        <p
          class="is-size-6 color"
        >Tell us a few things about yourself and we'll introduce you to experts who are the perfect matches for you.</p>
      </div>
      <div class="text-block text-block-two how-work-div2">
        <h1 class="color">Book a demo with your perfect match</h1>
        <p class="is-size-6 color">
          We will contact you within 24 hours to book a demo class
          with
          <br />your perfect match. We guarantee that you'll love your
          <br />first lesson. If not, we'll cover the first session.
        </p>
      </div>
      <div class="text-block text-block-three how-work-div3">
        <h1 class="color">Accept and Subscribe</h1>
        <p class="is-size-6 color">
          If you are satisfied with the approach and depth of your instructor's knowledge,
          <br />you can start one of its kind EdHusk experience.
        </p>
      </div>
    </section>

    <!-- What Students Says #START-->
    <section>
      <p class="is-size-3 has-text-weight-bold has-text-centered subheading">What Students Says</p>

      <section>
        <b-carousel
          :indicator="indicator"
          :indicator-background="indicatorBackground"
          :indicator-inside="indicatorInside"
          :indicator-mode="indicatorMode"
          :indicator-position="indicatorPosition"
          :indicator-style="indicatorStyle"
        >
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
              <div class="hero-body has-text-centered">
                <h1 class="title">{{ carousel.title }}</h1>
              </div>
            </section>
          </b-carousel-item>
        </b-carousel>
      </section>
    </section>
    <!-- What Students Says #END-->
    <br />
    <br />
    <br />

    <section class="is-half">
      <!-- Featured in #START-->
      <section>
        <img src="../assets/dots.png" class="left-dot-img" />

        <img src="../assets/dots.png" class="right-dot-img" />
        <p class="is-size-3 has-text-weight-bold has-text-centered subheading">Featured in</p>
        <br />

        <div class="columns col-size">
          <div class="column">
            <img class="zoom-size" src="~assets/yourstory.png" alt />
          </div>
          <div class="column">
            <img class="zoom-size" src="~assets/vccircle.png" alt />
          </div>
          <div class="column">
            <img class="zoom-size" src="~assets/inc.png" alt />
          </div>
          <div class="column">
            <img class="zoom-size" src="~assets/techgraph.png" alt />
          </div>
        </div>
      </section>
      <!-- Featured in #END-->
      <br />
      <br />
      <!-- call back #START-->
      <section class="call-back">
        <p
          class="is-size-3 has-text-weight-bold container has-text-centered subheading"
        >Request a Call Back</p>
        <br />
        <p class="is-size-5 has-text-grey container has-text-centered subheading">
          Get
          <button
            class="button is-outlined is-primary"
            @click="callback = !callback"
          >free counselling</button> by our IIT Kharagpur Team
        </p>
        <br />

        <div v-if="callback" class="call-back">
          <div v-if="callback" class="container card-content">
            <div class="content">
              <ValidationObserver ref="callbackForm">
                <form-input
                  key="name"
                  v-model="form.name"
                  vid="name"
                  type="text"
                  rules="required"
                  placeholder="Please enter your name, eg: Amit Kumar"
                />
                <br />
                <form-input
                  key="contact"
                  v-model="form.contact"
                  vid="contact"
                  type="tel"
                  rules="required|digits:10"
                  placeholder="Please enter 10 digit mobile number"
                />
              </ValidationObserver>
            </div>
          </div>
          <button class="btn">
            <a
              class="card-footer-item btn has-text-centered"
              @click.prevent="validateBeforeSubmit"
            >Send Message</a>
          </button>
        </div>
      </section>

      <footer class="footer">
        <div class="columns footer-top-col">
          <div class="column">
            <div class="float-l">
              <span class="icon is-medium">
                <a href="https://www.facebook.com/edhuskindia/">
                  <i class="fab fa-facebook fa-2x" />
                </a>
              </span>
              <span class="icon is-medium">
                <a href="https://twitter.com/edhusk_com">
                  <i class="fab fa-twitter fa-2x" />
                </a>
              </span>
              <span class="icon is-medium">
                <a href="https://www.instagram.com/edhusk.india/">
                  <i class="fab fa-instagram fa-2x" />
                </a>
              </span>
            </div>
          </div>
          <div class="column">
            <span class="float-r f-btn">
              <a href="/tutor/" class="button btn">Become a Tutor</a>
            </span>
          </div>
        </div>
        <br />
        <br />

        <div class="columns footer-top-col">
          <div class="column footer-information">
            <div class="address">
              <p class="address-title has-text-weight-bold subheading is-size-4">Contact Us</p>
              <br />
              <p>Edhusk Pvt. Ltd.</p>
              <p>A-469, Vaishali Nagar</p>
              <p>Jaipur, 302021</p>
            </div>
            <br />
            <div class="contact-details">
              <p>0141-4916128</p>
              <p>+91-7585965858</p>
              <p>+91-8764227181</p>
            </div>
          </div>
          <div class="column footer-links">
            <a href="/academics/1" class="footer-link">Home tutor for Class 1</a>
            <br />
            <a href="/academics/5" class="footer-link">Home tutor for Class 5</a>
            <br />
            <a href="/academics/6" class="footer-link">Home tutor for Class 6</a>
            <br />
            <a href="/academics/8" class="footer-link">Home tutor for Class 8</a>
            <br />
            <a href="/academics/9" class="footer-link">Home tutor for Class 9</a>
            <br />
            <a href="/academics/10" class="footer-link">Home tutor for Class 10</a>
            <br />
            <a href="/academics/11-sci" class="footer-link">Home tutor for Class 11 - Science</a>
            <br />
            <a href="/academics/11-com" class="footer-link">Home tutor for Class 11 - Commerce</a>
            <br />
            <a href="/sports/chess" class="footer-link">Book Coach for Chess</a>
            <br />
            <a href="/sports/cricket" class="footer-link">Book Coach for Cricket</a>
          </div>
          <div class="column footer-links">
            <a href="/sports/martial-arts" class="footer-link">Book Coach for Martial Arts</a>
            <br />
            <a href="/fitness/dietician" class="footer-link">Book a Dietician</a>
            <br />
            <a href="/fitness/yoga" class="footer-link">Book an Instructor for Yoga</a>
            <br />
            <a href="/fitness/zumba" class="footer-link">Book an Instructor for Zumba</a>
            <br />
            <a href="/hobbies/art-craft" class="footer-link">Home tutor for Art & Craft</a>
            <br />
            <a
              href="/life-skills/computer-basics"
              class="footer-link"
            >Home tutor for Computer Basics</a>
            <br />
            <a href="/hobbies/western-dance" class="footer-link">Book Instructor for Western Dance</a>
            <br />
            <a href="/hobbies/guitar" class="footer-link">Book Instructor for Guitar</a>
            <br />
            <a
              href="/life-skills/speaking-english"
              class="footer-link"
            >Home tutor for Spoken English</a>
            <br />
            <a
              href="/hobbies/western-instrument"
              class="footer-link"
            >Book Instructor for Western Instrument</a>
          </div>
        </div>

        <hr class="is-white" />
        <div class="has-text-centered">
          <p class="is-white">© 2020 Edhusk Pvt. Ltd. All Rights Reserved</p>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import {
  ValidationObserver
} from 'vee-validate'
import FormInput from '../components/FormInput.vue'

export default {
  name: 'HomePage',
  // layout: 'landing',
  components: {
    ValidationObserver,
    FormInput
  },
  data() {
    return {
      indicator: true,
      indicatorBackground: false,
      indicatorInside: true,
      indicatorMode: 'hover',
      indicatorPosition: 'is-top',
      indicatorStyle: 'is-dots',
      carousels: [{
        title: 'Slide 1',
        color: 'info'
      },
      {
        title: 'Slide 2',
        color: 'success'
      },
      {
        title: 'Slide 3',
        color: 'warning'
      },
      {
        title: 'Slide 4',
        color: 'danger'
      }
      ],
      category: '',
      formLink: '',
      callback: false,
      portfolioCategory: 'all',
      form: {
        name: '',
        number: null
      },
      optionsCategory: [
        'Academics',
        'Sports and Fitness',
        'Hobbies and Life-Skills'
      ],
      academicsArray: [{
        link: '/academics/pre-primary',
        text: 'Pre Primary'
      },
      {
        link: '/academics/1',
        text: 'Class 1'
      },
      {
        link: '/academics/2',
        text: 'Class 2'
      },
      {
        link: '/academics/3',
        text: 'Class 3'
      },
      {
        link: '/academics/4',
        text: 'Class 4'
      },
      {
        link: '/academics/5',
        text: 'Class 5'
      },
      {
        link: '/academics/6',
        text: 'Class 6'
      },
      {
        link: '/academics/7',
        text: 'Class 7'
      },
      {
        link: '/academics/8',
        text: 'Class 8'
      },
      {
        link: '/academics/9',
        text: 'Class 9'
      },
      {
        link: '/academics/10',
        text: 'Class 10'
      },
      {
        link: '/academics/11-art',
        text: 'Class 11 - Arts'
      },
      {
        link: '/academics/11-sci',
        text: 'Class 11 - Commerce'
      },
      {
        link: '/academics/11-com',
        text: 'Class 11 - Science'
      },
      {
        link: '/academics/12-art',
        text: 'Class 12 - Arts'
      },
      {
        link: '/academics/12-com',
        text: 'Class 12 - Commerce'
      },
      {
        link: '/academics/12-sci',
        text: 'Class 12 - Science'
      }
      ],
      hobbiesArray: [{
        link: '/hobbies/art-craft',
        text: 'Art & Craft'
      },
      {
        link: '/hobbies/classical-dance',
        text: 'Classical Dance'
      },
      {
        link: '/life-skills/computer-basics',
        text: 'Computer Basics'
      },
      {
        link: '/hobbies/cooking',
        text: 'Cooking'
      },
      {
        link: '/hobbies/western-dance',
        text: 'Western Dance'
      },
      {
        link: '/hobbies/guitar',
        text: 'Guitar'
      },
      {
        link: '/life-skills/learn-lang',
        text: 'Learn a Language'
      },
      {
        link: '/hobbies/indian-instrument',
        text: 'Indian Instrument'
      },
      {
        link: '/life-skills/speaking-english',
        text: 'Spoken English'
      },
      {
        link: '/hobbies/vocal',
        text: 'Vocals'
      },
      {
        link: '/hobbies/western-instrument',
        text: 'Western Instrument'
      }
      ],
      sportsArray: [{
        link: '/sports/badminton',
        text: 'Badminton'
      },
      {
        link: '/sports/basketball',
        text: 'Basketball'
      },
      {
        link: '/sports/chess',
        text: 'Chess'
      },
      {
        link: '/sports/cricket',
        text: 'Cricket'
      },
      {
        link: '/fitness/dietician',
        text: 'Dietician'
      },
      {
        link: '/sports/football',
        text: 'Football'
      },
      {
        link: '/sports/martial-arts',
        text: 'Martial Arts'
      },
      {
        link: '/sports/running',
        text: 'Running'
      },
      {
        link: '/sports/skating',
        text: 'Skating'
      },
      {
        link: '/sports/swimming',
        text: 'Swimming'
      },
      {
        link: '/fitness/fitness-trainer',
        text: 'Fitness Trainer'
      },
      {
        link: '/sports/volleyball',
        text: 'Volleyball'
      },
      {
        link: '/fitness/yoga',
        text: 'Yoga'
      },
      {
        link: '/fitness/zumba',
        text: 'Zumba'
      }
      ]
    }
  },
  computed: {
    optionFieldComputed() {
      if (this.category === 'Academics') {
        return this.academicsArray
      } else if (this.category === 'Sports and Fitness') {
        return this.sportsArray
      } else if (this.category === 'Hobbies and Life-Skills') {
        return this.hobbiesArray
      }
      return null
    },
    workSectionToggleComputed() {
      if (this.portfolioCategory === 'all') {
        return false
      }
      return this.workSectionHeightObject
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$refs.callbackForm.validate().then((success) => {
        if (success) {
          this.addCallbackQuery()
        }
      })
      console.log('ho raha hai')
    },
    addCallbackQuery() {
      this.$axios.$post('/request-callback/', {
        name: this.form.name,
        contact: this.form.contact
      })
        .then(
          console.log('ho gaya')
        )
        .catch((error) => {
          console.log(error)
        })
    }
  },
  head() {
    return {
      title: 'EdHusk - Personalised Learning at your Doorstep',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Edhusk'
      }]
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");
.btn {
  background-color: #bf4aa8;
  border: 0;
  color: white;
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 0.1rem;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
}

.disp-old {
  display: none;
}

.disp-new {
  display: block;
}

.card-col {
  padding-left: 50px;
  padding-right: 50px;
}

.stat-data {
  float: right;
  margin-top: 0 !important;
  padding: 0;
}

.subheading {
  color: #028b8a;
  font-family: Roboto;
}

.color {
  color: black !important;
}

.col-size {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}

.zoom-size {
  zoom: 0.5;
}

.is-medium {
  padding: 40px;
}

.is-medium > a {
  color: #bf4aa8;
}
.is-half {
  position: relative;
}

.float-r {
  float: right;
}

.float-l {
  float: left;
}

section.top-image {
  padding-top: 50px;
  position: relative;
}

section.top-image > img.banner {
  width: 90vw;
  /* height:100vh; */
  /* float:right; */
  margin-left: 200px;
  margin-top: -300px;
}

section.top-image > img.top-banner-vector {
  position: absolute;
  height: 65%;
  left: 54%;
  z-index: 200;
  top: 13%;
}

section.top-image > h1 {
  position: absolute;
  top: 25%;
  left: 2%;
  color: white;
  font-size: 5vw;
  color: #bf4aa8;
  font-family: Roboto;
}

section.top-image > div.field > div.category {
  position: absolute;
  top: 42%;
  left: 2%;
}

section.top-image > div.field > div.standard {
  position: absolute;
  top: 42%;
  left: 15%;
}

section.top-image > a#submit {
  position: absolute;
  top: 48%;
  left: 2%;
}

@media (max-width: 1800px) {
  section.top-image > div.field > div.standard {
    left: 18%;
  }
}

@media (max-width: 1450px) {
  section.top-image > div.field > div.standard {
    left: 20%;
  }
}

@media (max-width: 1300px) {
  section.top-image > div.field > div.standard {
    left: 22%;
  }

  section.top-image > a#submit {
    top: 51%;
  }
}

@media (max-width: 1150px) {
  section.top-image > div.field > div.standard {
    left: 25%;
  }
}

@media (max-width: 1000px) {
  section.top-image > div.field > div.standard {
    left: 27%;
  }
}

@media (max-width: 950px) {
  section.top-image > div.field > div.standard {
    left: 28%;
  }
}

@media (max-width: 900px) {
  section.top-image > img.top-banner-vector {
    height: 63%;
    left: 58%;
  }

  section.top-image > div.field > div.standard {
    left: 30%;
  }
}

@media (max-width: 825px) {
  section.top-image > div.field > div.standard {
    left: 31%;
  }
}

@media (max-width: 800px) {
  section.top-image > div.field > div.standard {
    left: 32%;
  }
}

@media (max-width: 767px) {
  section.top-image > img.top-banner-vector {
    display: none;
  }

  section.top-image > div.field > div.standard {
    left: 35%;
  }

  section.top-image > h1 {
    top: 20%;
    font-size: 7vw;
  }

  section.top-image > a#submit {
    top: 53%;
  }
}

@media (max-width: 700px) {
  section.top-image > div.field > div.standard {
    left: 38%;
  }
}

@media (max-width: 650px) {
  section.top-image > div.field > div.standard {
    left: 40%;
  }
}

@media (max-width: 600px) {
  section.top-image > div.field > div.standard {
    left: 43%;
  }

  section.top-image > a#submit {
    top: 55%;
  }
}

@media (max-width: 550px) {
  section.top-image > div.field > div.standard {
    left: 48%;
  }
}

@media (max-width: 500px) {
  section.top-image > div.field > div.standard {
    top: 56%;
    left: 2%;
  }

  section.top-image > a#submit {
    top: 48%;
    left: 60%;
  }
}

@media (max-width: 450px) {
  section.top-image > div.field > div.standard {
    top: 58%;
  }

  .col-pad {
    padding: 15px;
  }

  .whyus-coloum {
    width: 100%;
  }

  .card-box {
    position: initial;
    top: 0%;
    transform: translateY(0%);
  }

  .disp-old {
    display: block;
  }

  .disp-new {
    display: none;
  }
}

@media (max-width: 400px) {
  section.top-image > h1 {
    top: 22%;
  }

  section.top-image > div.field > div.standard {
    top: 60%;
  }

  section.top-image > a#submit {
    top: 48%;
    left: 70%;
  }

  section.top-image > img.banner {
    display: none;
  }

  section.top-image {
    height: 250px;
    background-color: #459bee;
  }
}

@media (max-width: 350px) {
  section.top-image > a#submit {
    left: 75%;
  }
}

@media (max-width: 350px) {
  section.top-image > a#submit {
    left: 2%;
    top: 78%;
  }
}

/******************* Services section starts here ***********************/
.services-col {
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.col-pad {
  padding-left: 100px;
  padding-right: 100px;
}

.services-img {
  margin-bottom: 20px;
  height: 55px;
}

.services-h1 {
  color: #028b8a;
  font-size: 25px;
  font-weight: 600;
  font-family: Roboto;
}
section.services {
  position: relative;
  padding-top: 50px;
  padding-bottom: 100px;
}

div.service-acads,
div.service-sports,
div.service-hobbies {
  position: relative;
  height: 200px;
}

div.service-acads > img,
div.service-sports > img,
div.service-hobbies > img {
  position: absolute;
  left: 5%;
}

div.service-acads > h2,
div.service-sports > h2,
div.service-hobbies > h2 {
  position: absolute;
  left: 25%;
  font-size: 2.25vw;
}

div.service-acads > ul,
div.service-sports > ul,
div.service-hobbies > ul {
  position: absolute;
  top: 30%;
  left: 5%;
  font-size: 1.65vw;
}

@media (max-width: 1400px) {
  section.services {
    padding-bottom: 30px;
  }

  div.service-acads > ul,
  div.service-sports > ul,
  div.service-hobbies > ul {
    font-size: 1.67vw;
  }
}

@media (max-width: 767px) {
  section.services {
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
  }

  div.service-acads,
  div.service-sports,
  div.service-hobbies {
    height: 225px;
  }

  div.service-acads > img {
    left: 39%;
  }

  div.service-acads > h2 {
    left: 49%;
    font-size: 3.5vw;
  }

  div.service-sports > img {
    left: 35%;
  }

  div.service-sports > h2 {
    left: 45%;
    font-size: 3.5vw;
  }

  div.service-hobbies > img {
    left: 30%;
  }

  div.service-hobbies > h2 {
    left: 40%;
    font-size: 3.5vw;
  }

  div.service-acads > ul,
  div.service-sports > ul,
  div.service-hobbies > ul {
    left: 28%;
    font-size: 3vw;
  }
}

/************************Why EdHusk section starts here************************/
.why-us-col {
  max-width: 350px;
  box-shadow: 0px 20px 20px #7682b72e;
}

.whyus-coloum {
  width: 65%;
  text-align: center;
  margin: 0 auto;
}
.why-us-img-pad {
  padding-top: 30px;
  padding-left: 50px;
}
.content-margin {
  margin-top: -30px;
}
.content {
  text-align: justify;
}
.why-us-hr-solid {
  color: #51d0de;
  border: 1px solid #51d0de;
  width: 80%;
  margin-top: 10px;
}
.why-us-hr-dash {
  color: #51d0de;
  border: 1px dashed #51d0de;
  width: 20%;
}
.card-box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 400px;
  box-shadow: 0px 20px 20px #7682b72e;
}

section.why-us {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 6rem;
}

section.why-us > div.columns.first-row {
  padding-top: 10px;
  padding-bottom: 10px;
}

section.why-us > div > div.column-why-us {
  position: relative;
  padding-left: 70px;
}

section.why-us > div > div.column-why-us > img {
  position: absolute;
  top: 15%;
  left: 0%;
}

@media (max-width: 767px) {
  section.why-us > div > div.column-why-us {
    padding: 10px 50px 10px 150px;
  }

  section.why-us > div > div.column-why-us > img {
    left: 8%;
  }
}

/************************How it works section starts here************************/
.how-work-img {
  margin-left: 110px;
}

.how-work-div1 {
  margin-top: 70px;
  padding-left: 30px;
}

.how-work-div2 {
  margin-left: -60px;
  margin-top: 20px;
}
.how-work-div3 {
  margin-top: -50px;
  padding-left: 30px;
}

section.work {
  position: relative;
}

section.work > img.image-background {
  width: 100%;
  z-index: -1;
}

section.work > img.image-one {
  position: absolute;
  left: 2%;
  width: 6%;
  top: 5%;
}

section.work > img.image-two {
  position: absolute;
  left: 83%;
  width: 15%;
  top: 38%;
}

section.work > img.image-three {
  position: absolute;
  left: 18%;
  width: 9%;
  top: 65%;
}

section.work > div.title-block {
  position: absolute;
  left: 30%;
  top: 0%;
  color: white;
  font-size: 7vw;
}

section.work > div.text-block {
  position: absolute;
  text-align: left;
}

section.work > div.text-block > h1 {
  font-size: 2vw;
}

section.work > div.text-block > p {
  color: white;
  font-size: 1.8vw;
}

section.work > div.text-block-one {
  top: 13%;
  left: 25%;
  width: 50%;
}

section.work > div.text-block-two {
  top: 40%;
  left: 20%;
  width: 50%;
}

section.work > div.text-block-three {
  top: 70%;
  left: 42%;
  width: 50%;
}

section.work > div.section-ladders {
  position: absolute;
  width: 90%;
  height: 80%;
  top: 0%;
  left: 10%;
}

section.work > div > div.start-block {
  position: absolute;
  height: 16%;
  width: 10%;
  z-index: 110;
  top: 0.5%;
  background-color: white;
}

section.work > div > div > div.start-triangle {
  position: absolute;
  z-index: 125;
  border-left: 1.5rem solid transparent;
  border-right: 1.5rem solid transparent;
  border-top: 1.5rem solid grey;
  top: 40%;
  left: 20%;
}

section.work > div > div.numbered-square {
  position: absolute;
  height: 14%;
  width: 10%;
  background-color: black;
  z-index: 110;
}

section.work > div > div.number-one {
  top: 17%;
}

section.work > div > div > div.hollow-circle {
  position: absolute;
  z-index: 125;
  border-radius: 50%;
  height: 95%;
  width: 95%;
  border: 0.25rem solid white;
  left: 2.5%;
  top: 2.5%;
}

section.work > div.section-ladders > div > div > p {
  position: absolute;
  color: white;
  top: -29%;
  left: 23%;
  font-size: 8vw;
}

div.sector {
  position: absolute;
  background-color: white;
  height: 17%;
  width: 13%;
  z-index: 110;
}

div.sector-cut-out {
  position: absolute;
  background-color: #459bee;
  z-index: 125;
  width: 25%;
  height: 25%;
}

div.sector-one {
  top: 31.5%;
  border-bottom-left-radius: 100%;
}

div.sector-cut-out-one {
  left: 77%;
  top: -5%;
  border-bottom-left-radius: 100%;
}

div.white-square {
  position: absolute;
  height: 14%;
  width: 10%;
  background-color: white;
  z-index: 110;
}

div.square-one {
  left: 13.5%;
  top: 34.5%;
}

div.square-two {
  left: 24%;
  top: 34.5%;
}

div.square-three {
  left: 34.5%;
  top: 34.5%;
}

div.square-four {
  left: 45%;
  top: 34.5%;
}

div.square-five {
  left: 55.5%;
  top: 34.5%;
}

div.sector-two {
  top: 34.5%;
  left: 66%;
  border-top-right-radius: 100%;
}

div.sector-cut-out-two {
  top: 80%;
  left: -3%;
  border-top-right-radius: 100%;
}

div.number-two {
  top: 52.5%;
  left: 69%;
}

div.sector-three {
  top: 67.5%;
  left: 66%;
  border-bottom-right-radius: 100%;
}

div.sector-cut-out-three {
  left: -3%;
  top: -3%;
  border-bottom-right-radius: 100%;
}

div.square-six {
  left: 55.5%;
  top: 71%;
}

div.square-seven {
  left: 45%;
  top: 71%;
}

div.square-eight {
  left: 34.5%;
  top: 71%;
}

div.sector-four {
  top: 71%;
  left: 21%;
  border-top-left-radius: 100%;
}

div.sector-cut-out-four {
  top: 80%;
  left: 77%;
  border-top-left-radius: 100%;
}

div.number-three {
  left: 21%;
  top: 89%;
}

@media (max-width: 1024px) {
  section.work > div.section-ladders > div > div > p {
    top: -32%;
    left: 22%;
  }
}

@media (max-width: 767px) {
  div.sector,
  div.square-three,
  div.square-four,
  div.square-five,
  div.square-six,
  div.square-seven,
  div.square-eight {
    display: none;
  }

  section.work > div.section-ladders {
    left: 15%;
  }

  section.work > div > div.start-block {
    height: 20%;
    width: 11%;
  }

  section.work > div > div > div.start-triangle {
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-top: 2rem solid grey;
    top: 35%;
    left: 7%;
  }

  section.work > div > div.numbered-square {
    height: 15%;
    width: 11%;
    background-color: black;
    z-index: 110;
  }

  section.work > div > div > div.hollow-circle {
    border: 0.2rem solid white;
  }

  section.work > div.section-ladders > div > div > p {
    top: -26%;
    left: 25%;
  }

  div.white-square {
    height: 15%;
    width: 11%;
  }

  section.work > div > div.number-one {
    top: 21.5%;
  }

  div.square-one {
    left: 0%;
    top: 37.5%;
  }

  section.work > div > div.number-two {
    left: 0%;
    top: 53.5%;
  }

  div.square-two {
    left: 0%;
    top: 69.5%;
  }

  section.work > div > div.number-three {
    left: 0%;
    top: 85.5%;
  }

  section.work > div.text-block > h1 {
    font-size: 4vw;
  }

  section.work > div.text-block > p {
    color: white;
    font-size: 2.25vw;
  }

  section.work > div.text-block-one {
    top: 15%;
    left: 28%;
    width: 70%;
  }

  section.work > div.text-block-two {
    top: 38%;
    left: 28%;
    width: 70%;
  }

  section.work > div.text-block-three {
    top: 63%;
    left: 28%;
    width: 70%;
  }

  section.work > img.image-one {
    left: 5%;
    width: 6%;
    top: 8%;
  }

  section.work > img.image-two {
    left: 1%;
    width: 13%;
    top: 41%;
  }

  section.work > img.image-three {
    left: 3%;
    width: 9%;
    top: 66%;
  }
}

@media (max-width: 725px) {
  section.work > div > div > div.start-triangle {
    border-left: 1.8rem solid transparent;
    border-right: 1.8rem solid transparent;
    border-top: 1.8rem solid grey;
    top: 35%;
    left: 10%;
  }
}

@media (max-width: 675px) {
  section.work > div > div > div.start-triangle {
    left: 7%;
  }
}

@media (max-width: 650px) {
  section.work > div > div > div.start-triangle {
    border-left: 1.5rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-top: 1.5rem solid grey;
    top: 35%;
    left: 13%;
  }
}

@media (max-width: 625px) {
  section.work > div > div > div.start-triangle {
    border-left: 1.4rem solid transparent;
    border-right: 1.4rem solid transparent;
    border-top: 1.4rem solid grey;
  }
}

@media (max-width: 575px) {
  section.work > div > div > div.start-triangle {
    border-left: 1.3rem solid transparent;
    border-right: 1.3rem solid transparent;
    border-top: 1.3rem solid grey;
  }
}

@media (max-width: 500px) {
  section.work > div > div > div.start-triangle {
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 1.2rem solid grey;
  }

  section.work > div.section-ladders > div > div > p {
    top: -31%;
    left: 23%;
  }
}

@media (max-width: 475px) {
  section.work > div > div > div.start-triangle {
    border-left: 1.1rem solid transparent;
    border-right: 1.1rem solid transparent;
    border-top: 1.1rem solid grey;
  }
}

@media (max-width: 450px) {
  section.work > div > div > div.start-triangle {
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1rem solid grey;
  }
}

@media (max-width: 400px) {
  section.work > div > div > div.start-triangle {
    border-left: 0.9rem solid transparent;
    border-right: 0.9rem solid transparent;
    border-top: 0.9rem solid grey;
    top: 35%;
    left: 12%;
  }
}

/********************* Portfolio section starts here *********************/
.left-dot-img {
  position: absolute;
  z-index: -10;
  zoom: 0.5;
  left: 2%;
}

.right-dot-img {
  position: absolute;
  z-index: -10;
  zoom: 0.5;
  right: 2%;
  top: 20%;
}

section.portfolio {
  position: relative;
  padding-top: 30px;
  padding-bottom: 50px;
}

section.portfolio > div.container.has-text-centered {
  padding-bottom: 2rem;
}

section.portfolio > div.portfolio-category > div > div.column.is-10 {
  padding-bottom: 0rem;
}

section.portfolio > div.portfolio-category > div > div > div > div {
  padding: 0rem;
}

section.portfolio > div.portfolio-category > div > div > div > div > img {
  -webkit-transition: all 0.25s ease;
  /* Safari and Chrome */
  -moz-transition: all 0.25s ease;
  /* Firefox */
  -ms-transition: all 0.25s ease;
  /* IE 9 */
  -o-transition: all 0.25s ease;
  /* Opera */
  transition: all 0.25s ease;
}

section.portfolio > div.portfolio-category > div > div > div > div > a {
  display: none;
  top: -25%;
}

section.portfolio > div.portfolio-category > div > div > div > div:hover img {
  -webkit-transform: scale(1.25);
  /* Safari and Chrome */
  -moz-transform: scale(1.25);
  /* Firefox */
  -ms-transform: scale(1.25);
  /* IE 9 */
  -o-transform: scale(1.25);
  /* Opera */
  transform: scale(1.25);
}

section.portfolio > div.portfolio-category > div > div > div > div:hover a {
  display: block;
}

@media (max-width: 767px) {
  section.portfolio > div.portfolio-category > div > div > div > div > img {
    width: 60%;
    margin-left: 20%;
  }
}

section.call-back {
  padding: 10px 20px 30px;
}

.call-back {
  width: 60%;
  margin: 0 auto;
}

.footer-top-col {
  width: 80%;
  margin: 0 auto;
}

footer.footer {
  background-color: rgba(81, 208, 222, 0.95);
  padding-bottom: 20px;
}

footer.footer > div > div > div > div > div > p {
  font-size: 1vw;
  color: #303030;
}

footer.footer > div > div > div > div > div.address,
footer.footer > div > div > div > div > div.contact-details {
  margin-top: 20px;
}

footer.footer > div > div > div > div > a {
  margin-top: 20px;
}

footer.footer > div > div > a.footer-link {
  font-size: 1vw;
  color: white;
}

@media (max-width: 767px) {
  footer.footer > div > div > div > div.footer-links,
  footer.footer > div > div > div > div.footer-information {
    text-align: center;
  }

  footer.footer > div > div > div > div > a.footer-link {
    font-size: 4vw;
  }

  footer.footer > div > div > div > div > div > p {
    font-size: 3vw;
  }
}
@media (max-width: 450px) {
  section.top-image > div.field > div.standard {
    top: 58%;
  }

  .col-pad {
    padding: 0;
    padding-top: 30px;
    width: 80vw;
    margin: 0 auto;
  }

  .whyus-coloum {
    width: 100%;
  }

  .card-box {
    position: initial;
    top: 0%;
    transform: translateY(0%);
  }

  .disp-old {
    display: block;
  }

  .disp-new {
    display: none;
  }
  .call-back {
    width: 80vw;
    margin: 0 auto;
  }
  .card-content {
    padding: 10px;
  }
  .f-btn {
    float: left;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .is-medium{
    padding: 10px;
  }
  .footer-link {
    font-size: 15px !important;
  }
  .footer {
    width: 105vw;
  }
}
</style>
