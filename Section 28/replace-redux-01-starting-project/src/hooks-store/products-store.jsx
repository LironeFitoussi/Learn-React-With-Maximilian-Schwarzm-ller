import { initStore } from "./store";

const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (cureState, productId) => {
            const prodIndex = cureState.products.findIndex(p => p.id === productId);
            const newFavStatus = !cureState.products[prodIndex].isFavorite;
            const updatedProducts = [...cureState.products];
            updatedProducts[prodIndex] = {
                ...cureState.products[prodIndex],
                isFavorite: newFavStatus
            };
            return { products: cureState.products };
        }
    }
    initStore(actions, {
        products: [
            {
                id: 'p1',
                title: 'Red Scarf',
                description: 'A pretty red scarf.',
                isFavorite: false
            },
            {
                id: 'p2',
                title: 'Blue T-Shirt',
                description: 'A pretty blue t-shirt.',
                isFavorite: false
            },
            {
                id: 'p3',
                title: 'Green Trousers',
                description: 'A pair of lightly green trousers.',
                isFavorite: false
            },
            {
                id: 'p4',
                title: 'Orange Hat',
                description: 'Street style! An orange hat.',
                isFavorite: false
            }
        ]
    });
};

export default configureStore;