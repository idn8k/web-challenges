import { useRouter } from 'next/router'
import useSWR from 'swr'
import ProductComponent from '@/components/ProductComponent'

export default function Product() {
    const router = useRouter()
    const { id } = router.query
    const { data: product, isLoading } = useSWR(`/api/products/${id}`)

    return (
        <>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <ProductComponent
                    name={product.name}
                    description={product.description}
                />
            )}
        </>
    )
}
