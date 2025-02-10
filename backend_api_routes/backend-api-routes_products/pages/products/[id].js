import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function Product() {
    const router = useRouter()
    const { id } = router.query
    const { data: product, isLoading } = useSWR(`/api/products/${id}`)

    return (
        <>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </>
            )}
        </>
    )
}
