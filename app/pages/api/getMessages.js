import {supabase} from '../../supabaseClient';

export default async (req, res) => {
    const {data} = await supabase
        .from('chats')
        .select('*')
        .order('id', {ascending: true})

    res.status(200).json({data: data})
}