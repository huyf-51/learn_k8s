import axios from 'axios';
import { useState } from 'react';

function App() {
    const [data, setData] = useState(undefined);
    const handle = async () => {
        const res = await axios.get('/api');
        setData(res.data);
    };

    return (
        <>
            <button onClick={handle}>call test</button>
            <div>{data ?? data}</div>
        </>
    );
}

export default App;
