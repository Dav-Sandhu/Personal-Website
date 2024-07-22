//checks to make sure that it is running developer mode or production mode and sets the correct corresponding path
export default function getPath(initialPath: string){
    const path = process.env.NODE_ENV === "production" ? '/personal-website' : ''

    return path + initialPath
}