it('sem testes', ()=>{});

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout = ( () => {
            resolve(13);
        }, 10)
    })
}
const system = () => {
    console.log('init');
    getSomething().then(some => {
        console.log(`something is ${some}`)
    });
    console.log('end');
}
system();