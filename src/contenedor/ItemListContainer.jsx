import '../contenedor/ItemListContainer.css';
import { useState, useEffect} from 'react'
import { doc, getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList/ItemList';
import Loading from '../components/Loading/Loading';

     const ItemListContainer = ( ) => {
        const [ products, setProducts ] = useState([])        
        const [ product, setProduct ] = useState({})        
        const [loading, setLoading] = useState(true)

        const { id } = useParams()




                useEffect(() =>{
                    const db = getFirestore()
                    const queryCollection = collection(db, 'productos')
                     if(id) {
                    

                   
                    const queryFilter = query(queryCollection, where('categoria', '==', id))

                    getDocs(queryFilter)
                    .then(data => setProducts(data.docs.map(product => ({id: product.id, ...product.data() } ) ) ) )
                    .catch( err => console.log(err))
                    .finally(() => setLoading(false))
                } else {
                    getDocs(queryCollection)
                    .then(data => setProducts( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
                    .catch(err => console.log())
                    .finally(()=> setLoading(false))
                }
            }, [id])

                return (
                    <div>
                    
                        {   loading ? 
                                <Loading />
                            :
                            <div>
                            <ItemList products={products} />
                            </div>
                            
                        }            
                    
                    </div>
                )
                }

                export default ItemListContainer