export const POST = async (req, res) => {
    console.log('Request method:', await req.headers);
    // console.log('Request body:', await req.json());
    // let body = await req.json();
    return new Response(JSON.stringify({ message: 'Request received' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // if (req.method === 'POST') {
        // res.status(200).json({ message: 'Request received', data: req.body });
    // } else {
    //     res.status(405).json({ message: 'Method Not Allowed' });
    // }
}