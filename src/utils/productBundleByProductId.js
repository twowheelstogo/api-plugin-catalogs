

export default async function productBundleByProductId(context, productId) {
    const { collections } = context;
    const { Bundles } = collections;

    return Bundles.findOne({ productId });
}