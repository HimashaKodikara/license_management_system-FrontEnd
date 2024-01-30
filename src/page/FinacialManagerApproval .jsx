import React from 'react';

const Clients = [
    {
        key: 1,
        clientID: 'C001',
        name: 'Sri Lanka Air Line',
        Country: 'Sri Lanka',
        Partner_Requested: 'Mr. davin Jhonson',
        Requested_Time_Period: '1 Year',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 2,
        clientID: 'C001',
        name: 'Sri Lanka Air Line',
        Country: 'Sri Lanka',
        Partner_Requested: 'Mr. davin Jhonson',
        Requested_Time_Period: '1 Year',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 3,
        clientID: 'C003',
        name: 'SLT Telicom',
        Country: 'Sri Lanka',
        Partner_Requested: 'Mr. davin Jhonson',
        Requested_Time_Period: '1 Year',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 4,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 5,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 6,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 7,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },
    {
        key: 8,
        name: 'Sri Lanka Air Line',
        client_id: '0213',
        Activate: '2020-12-05',
        Due: '2020-12-05',
        modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
    },


];



function PartnerManagerApproval() {
    const line = Clients.reduce((resultArray, item, index) => {
        const rowIndex = Math.floor(index / 2);
        if (!resultArray[rowIndex]) {
            resultArray[rowIndex] = [];
        }
        resultArray[rowIndex].push(item);
        return resultArray;
    }, []);

    return (
        <div>
            <div>
                {line.map((row, rowIndex) => (

                    <div key={rowIndex} className="flex flex-wrap justify-center gap-10 mt-5 mb-8 ml-18 mr-18 ">
                        {row.map((client) => (
                            <div
                                key={client.key}
                                className="h-auto w-[450px]  bg-[#CCC7C7] rounded-lg pb-3 shadow-lg pl-7 pr-7   lg:w-1/3 xl:w-1/3 ">
                                <div className="flex gap-6 pt-2 justify-evenly">
                                    <div className="text-[26px] font-normal">{client.name}</div>

                                </div>
                                <div className="mx-auto bg-white h-0.5 w-7/8 overflow-hidden"></div>
                      
                              <div className="flex pt-3 overflow-hidden justify-evenly ">
                                    <div>Client Name  :</div>
                                    
                                    <div>{client.name}</div>

                                </div>
                              <div className="flex p-3 overflow-hidden justify-evenly">
                                    <div >Client ID  :</div>
                                    
                                    <div>{client.clientID}</div>

                                </div>
                                <div className="flex pt-3 overflow-hidden justify-evenly">
                                    <div>Country  :</div>
                                    
                                    <div>{client.Country}</div>

                                </div>
                                <div className="flex pt-3 overflow-hidden justify-evenly">
                                    <div >Partner time Period  :</div>
                                  
                                    <div>{client.Partner_Requested}</div>

                                </div>
                                <div className="flex pt-3 overflow-hidden justify-evenly">
                                    <div >Partner Requested   : </div>
                                    
                                    <div>{client.Requested_Time_Period}</div>

                                </div>
                                <div className="flex pt-3 overflow-hidden justify-evenly">
                                    <div> Requested Module   : </div>
                        
                                    <div>{client.modules.map((module, index) => (
                                        <div key={index}>{module}</div>
                                    ))}</div>

                                </div>
                                <div className=''>
                                    <div className='ml-3'>Financial manager Approval</div>
                                    <div className="flex justify-evenly pt-0   gap-2.5">
                                        <button className="w-48 p-2 mt-10 font-bold text-white bg-green-600 rounded-md shadow-xl hover:bg-green-300 ">Accept</button>
                                        <button className="w-48 p-2 mt-10 font-bold text-white bg-red-700 rounded-md shadow-xl hover:bg-red-500 ">Reject</button>
                                    </div>

                                    </div>

                            </div>

                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default PartnerManagerApproval;
