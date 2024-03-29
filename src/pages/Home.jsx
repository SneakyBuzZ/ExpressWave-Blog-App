import { useEffect, useState } from "react"
import databaseService from "../appwrite/config"
import { Container, Home } from "../components"
import BlogScroll from "../components/blogscroll/BlogScroll"
import AuthModal from "../components/modal/LoginModal"
import SigninModal from "../components/modal/SigninModal"



function HomePage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        databaseService.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full">
                <Container>
                    <Home />
                    <AuthModal />
                    <SigninModal />
                    <BlogScroll />
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full">
            <Container>
                <h1>Welcome!</h1>
                <Home />
            </Container>
        </div>
    )
}

export default HomePage
