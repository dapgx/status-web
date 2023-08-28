const Card = {
    props: {
        data: {
            type: Object
        }
    },
    setup: (props) => {
        const data = props.data
        return {
            data
        }
    },
    render: ({ data }) => (
        <>
        <div class="border rounded-xl p-5">
            <h1 class="w-full text-end mb-2">{data.author}</h1>
            <hr />
            <h1 class="mt-2">&gt; {data.status}</h1>
        </div>
        </>
    )
}

export default Card