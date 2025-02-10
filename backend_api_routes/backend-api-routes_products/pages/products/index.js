import Link from 'next/link'
import useSWR from 'swr'

export default function Products() {
    const { data: products, isLoading } = useSWR('/api/products')

    return (
        <>
            <h1>Products page</h1>
            <ul>
                {isLoading ? (
                    <h4>Loading...</h4>
                ) : (
                    products.map(product => (
                        <li key={product.id}>
                            <Link href={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </>
    )
}
