export class UserApi{

    url = "http://localhost:3400/user"

    async authenticate(email, password){
        try{
            const response = await fetch(`${this.url}?email=${email}`)
            const data = await response.json();

            return data.length === 0 ;
        }catch(ex){
            console.log(ex)
        }
    }
}
