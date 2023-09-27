import { PieChart, Pie, Sector, Legend, Cell, ResponsiveContainer } from 'recharts';
import { getStoredDonation } from '../../utility/localstorage';
import { useLoaderData } from 'react-router-dom';



const Statistics = () => {

    const total = useLoaderData();

    const donated = getStoredDonation();

    const totalDonation = total.length - donated.length; 
    const yourDonation = donated.length;

    const data = [
        { name: 'Total Donation', value: totalDonation },
        { name: 'Your Donation', value: yourDonation },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <div className='flex justify-center'>
            <PieChart width={400} height={400}>
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default Statistics;