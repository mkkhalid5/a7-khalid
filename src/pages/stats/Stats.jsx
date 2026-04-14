import { useContext } from 'react';
import { GoDotFill } from 'react-icons/go';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../context/FriendContext';


const Stats = () => {
    const { friendContact } = useContext(FriendContext);

    const callCount = friendContact.filter(item => item.actionType === "call").length;
    const textCount = friendContact.filter(item => item.actionType === "text").length;
    const videoCount = friendContact.filter(item => item.actionType === "video").length;

    const data = [
        { name: "Text", value: textCount, fill: "#7E35E1" },
        { name: "Call", value: callCount, fill: "#244D3F" },
        { name: "Video", value: videoCount, fill: "#37A163" },
    ]

    return (

        <div className='py-20 container mx-auto px-3 space-y-6'>
            <h2 className='text-3xl md:text-5xl font-bold'>Friendship Analytics</h2>
            <div className='p-8 space-y-6 bg-white rounded-md shadow'>
                <h2 className='text-[#244D3F]'>By Interaction Type</h2>
                 
                {
                    friendContact.length === 0 ? <div className='text-center'>No interactions created.!</div> :
                    <div className='flex justify-center'>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '40vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend iconType='circle' />
                            <Tooltip />
                        </PieChart>
                    </div>
                }

            </div>
        </div>
    );
};

export default Stats;