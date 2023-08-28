import { RouterLink } from 'vue-router'

const Button = () => {
    const routes = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/add",
            name: "Add Post"
        }
    ]
    return (
        <>
        {
            routes.map(
                route => (
                    <RouterLink class="font-bold text-lg mx-4 hover:border-b-2" to={route.path}>{route.name}</RouterLink>
                )
            )
        }
        </>
    )
}

const Navbar = {
    render: () => (
        <nav class="sticky flex justify-end bg-black border-b-2 border-white">
            <div class="mr-12 my-4">
                <Button />
            </div>
        </nav>
    )
}

export default Navbar