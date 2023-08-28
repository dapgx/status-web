import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const AddView = {
    setup: () => {

        const router = useRouter()

        const author = ref('')
        const status = ref('')

        const authorChange = (event) => {
            author.value = event.target.value
        }

        const statusChange = (event) => {
            status.value = event.target.value
        }

        const onCheck = async () => {
            await axios.get('/status').then(
                async res => {
                    const data = res.data
                    if (data.length >= 15) {
                        const id = data[0].id
                        await axios.delete('status/' + id)
                    }
                }
            )
        }

        const posting = async (event) => {
            event.preventDefault()
            onCheck()
            await axios.post('/status', {
                author: author.value,
                status: status.value
            }).then(
                () => router.push('/')
            )
        }

        return {
            author,
            status,
            authorChange,
            statusChange,
            posting
        }
    },
    render: ({ author, status, authorChange, statusChange, posting }) => (
        <>
        <div class="border-2 rounded-2xl">
            <form onSubmit={() => posting(event)}>
            <div class="flex px-5 py-4">
                    <label htmlFor="author" class="w-1/4 text-lg font-bold">Author</label>
                    <input type="text" id="author" value={author} onChange={(e) => authorChange(e)} class="w-3/4 bg-black border rouded-xl" />
                </div>
                <div class="flex px-5 pb-4">
                    <label htmlFor="status" class="w-1/4 text-lg font-bold">Status</label>
                    <textarea type="text" id="status" value={status} onChange={(e) => statusChange(e)} class="w-3/4 bg-black border rouded-xl" />
                </div>
                <div class="flex justify-end px-5 pb-4">
                    <button type="submit" class="border rounded-lg px-2 py-1 text-lg font-bold hover:bg-white hover:text-black">Post</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddView