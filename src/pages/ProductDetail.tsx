import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, ShoppingCart } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useCartStore, type ShopifyProduct } from "@/stores/cartStore";
import { toast } from "sonner";

export default function ProductDetail() {
  const { handle } = useParams();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const addItem = useCartStore(s => s.addItem);
  const isCartLoading = useCartStore(s => s.isLoading);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        if (data?.data?.productByHandle) {
          setProduct(data.data.productByHandle);
        }
      } catch (e) {
        console.error("Failed to fetch product:", e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.variants.edges[selectedVariant]?.node;
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: product.title });
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Loader2 className="h-8 w-8 animate-spin text-bronze" />
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
      <p className="text-muted-foreground font-sans">Product not found</p>
      <Link to="/" className="text-bronze font-sans text-sm hover:underline">← Back to store</Link>
    </div>
  );

  const currentVariant = product.variants.edges[selectedVariant]?.node;

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-sans text-sm mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to store
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="aspect-square overflow-hidden rounded-lg bg-card mb-4">
              {product.images.edges[selectedImage] && (
                <img
                  src={product.images.edges[selectedImage].node.url}
                  alt={product.images.edges[selectedImage].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {product.images.edges.length > 1 && (
              <div className="flex gap-3">
                {product.images.edges.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${i === selectedImage ? 'border-bronze' : 'border-border'}`}
                  >
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-bronze mb-3">Grand Timepieces</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{product.title}</h1>
            <p className="font-sans text-2xl text-bronze font-semibold mb-6">
              {currentVariant?.price.currencyCode} {parseFloat(currentVariant?.price.amount || "0").toFixed(2)}
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {product.variants.edges.length > 1 && (
              <div className="mb-8">
                <p className="font-sans text-sm font-medium text-foreground mb-3">Variant</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.edges.map((v, i) => (
                    <button
                      key={v.node.id}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-4 py-2 rounded-sm font-sans text-sm border transition-all ${
                        i === selectedVariant
                          ? 'border-bronze bg-bronze/10 text-foreground'
                          : 'border-border text-muted-foreground hover:border-foreground/30'
                      }`}
                    >
                      {v.node.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              disabled={isCartLoading || !currentVariant?.availableForSale}
              className="w-full py-4 bg-bronze text-primary-foreground font-sans font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-bronze/90 transition-colors glow-bronze flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isCartLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><ShoppingCart className="h-4 w-4" /> Add to Cart</>}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
