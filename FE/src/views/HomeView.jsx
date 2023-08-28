import { onMounted, ref } from 'vue'
import axios from 'axios'
import Card from "../components/contents/Card"

const HomeView = {
    setup: () => {
        const status = ref([])

        onMounted(
            async () => {
                await axios.get('/status').then(
                    res => {
                        status.value = res.data
                    }
                ).catch(
                    err => {
                        console.log(err)
                    }
                )
            }
        )
        return {
            status
        }
    },
    render: ({ status }) => (
        <>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-5">
            {
                status ? status.map(
                    (data, index) => (
                        <Card key={index} data={data}/>
                    )
                ) : (
                    <h1 class="w-full text-center text-2xl font-bold">Content Not Fond!</h1>
                )
            }
        </div>
        </>
    )
}

export default HomeView