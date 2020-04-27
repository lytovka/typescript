const baseLink: string = 'https://restcountries.eu/rest/v2/all';

const getAll = async (): Promise<Object[]> => {
    const res = await fetch(baseLink).then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());
    return res;
} 

export default { getAll };