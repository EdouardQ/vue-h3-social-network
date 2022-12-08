<template>
    <div>
        <article v-for="article, index in articles" :key="index">
            <div>
                <img src="{{ article.urlImgArticle }}" alt="">
            </div>
            <div>
                <h3>{{ article.urlImgArticle }}</h3>
                <div>
                    <div>{{ article.content }}</div>
                    <div>{{ article.like }}</div>
                </div>
            </div>
        </article>
    </div>
</template>

<script setup>
    import ArticleApi from "@/services/article";
    import { ref , onMounted } from "vue"
    let articles = ref({})

    async function getArticles(){
        const api = new ArticleApi()
        articles.value = await api.getAll()
    }

    onMounted( async() => {
        await getArticles()
    })
</script>