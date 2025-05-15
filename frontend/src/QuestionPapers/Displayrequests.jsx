import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaperRequests = () => {

    const navigate = useNavigate();

    const mockRequests = [
        { id: 1, paper: "Advanced Algorithms", semester: "6", requestedBy: "John Doe", date: "2023-05-15" },
        { id: 2, paper: "Database Systems", semester: "4", requestedBy: "Jane Smith", date: "2023-05-10" },
        { id: 3, paper: "Machine Learning", semester: "8", requestedBy: "Alex Johnson", date: "2023-05-05" },
    ];

    const handleContribute = (request) => {
        navigate('/contribute')
    }

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 transform hover:scale-105 transition-transform duration-300">
                        Recent requests from students
                    </p>
                </div>

                <div className="space-y-6">
                    {mockRequests.map((request) => (
                        <div
                            key={request.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                    <div className="mb-4 sm:mb-0">
                                        <h3 className="text-lg font-medium text-gray-800">
                                            {request.paper}
                                        </h3>
                                        <p className="text-sm text-gray-500">Semester {request.semester}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
                                        Pending
                                    </span>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <p className="text-sm text-gray-500">
                                        Requested by <span className="font-medium">{request.requestedBy}</span> on {request.date}
                                    </p>
                                    <div className="flex space-x-3">
                                        <button
                                            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-200"
                                            onClick={() => handleContribute(request)}
                                        >
                                            Contribute to this request
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaperRequests;