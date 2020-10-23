export default function (to, from, next) {
        if(localStorage.getItem('leadhit-site-id')){
            next();
        }
        else{
            next('/')
        }
}