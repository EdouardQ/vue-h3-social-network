export default class ArticleApi{

    url = "http://localhost:3400/article"

    static _instance ;

    static getInstance(){
        if(_instance === null){
            ArticleApi._instance = new getArticleApi()
        }
        return ArticleApi._instance ;
    }

    async getAll(){
        try{
            const reponse = await fetch(this.url);
            const data = await reponse.json()
            return data
        }catch(ex){
            console.log(ex)
        }
    }

    async getOne(id){
        try{
            const reponse = await fetch(`${this.url}/${id}`);
            const data = await reponse.json()
            return data
        }catch(ex){
            console.log(ex)
        }
    }
}
