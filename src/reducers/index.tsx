export interface ITestInterface {
    loading: boolean;
}

const entities = (
    state: ITestInterface = {
        loading: false
    },
    action: any
): ITestInterface => {
    switch (action.type) {
        default:
            return state;
    }
};

export default entities;
