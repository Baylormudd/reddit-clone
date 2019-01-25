<template>
<section>
    <button @click="showForm = !showForm" class="button is-primary">Toggle Form</button>

<h1 class="is-size-3 has-text-weight-semibold">{{subreddit.name}}</h1>

<form v-if="showForm" @submit.prevent="onCreatePost()">
     <b-field label="Title">
            <b-input v-model="post.title" required></b-input>
        </b-field>
        <b-field label="Description">
            <b-input type="textarea" v-model="post.description"></b-input>
        </b-field>
        <b-field label="URL">
            <b-input v-model="post.URL" type="url"></b-input>
        </b-field>
        <button class="button is-success">Add Post</button>
</form>
<article class="media" v-for="post in posts" :key="post.id">
  <figure class="media-left">
    <section class="image is-32x32"  v-if="isImage(post.URL)">
                      <figure class="image">
                          <img :src="post.URL"
                              alt="Placeholder image">
                      </figure>
      </section>
   
  </figure>
  <div class="media-content">
    <div class="content">
       <p v-if="post.URL">
            <a :href="post.URL" target="_blank">{{post.title}}</a>
        </p>
        <br>
        {{post.description}}
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
   <div class="media-right">
    <section style="align-items:center;">
        <!-- <figure class="image is-32x32">
              <img :src="user.image" alt="">
            </figure>
            <figcaption>{{user.name}}</figcaption>
            -->
            hey
            </section> 
  </div>
</article>
</section>
</template>


<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        showForm: false,
        post: {
        title: '',
        description: '',
        URL: '',
        }
    }),
    mounted(){
       this.initSubreddit(this.$route.params.name);
    },
   watch: {
       '$route.params.name'(){
           this.initSubreddit(this.$route.params.name);
       },
       subreddit(){
           if(this.subreddit.id){
               this.initPosts(this.subreddit.id);
           }
       }
   },
    computed: {
        ...mapState('subreddit',['posts']),
        ...mapGetters('subreddit',['subreddit'])
    },
    methods: {
        isImage(url) {
      return url.match(/(png|jpg|jpeg|gif)$/);
    },
        ...mapActions('subreddit',['createPost','initSubreddit','initPosts']),
        async onCreatePost(){
            if(this.post.title && (this.post.description || this.post.URL)){
                await this.createPost(this.post);
            }
        }
    },
};
</script>

<style>
.subreddit-title{
    margin-top: 10px;
    margin-bottom: 1px;
}
</style>
