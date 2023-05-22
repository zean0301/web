import React, { useState } from 'react';

function DropdownMenu({content}) {
    console.log(content)
    const [showButtons, setShowButtons] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const handleIconClick = () => {
        setShowButtons(!showButtons);
    };

    const handleDelete = () => {
        console.log('执行删除操作');
    };

    return (
        <div className="relative">
            <div className="icon" onClick={handleIconClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
                <i className="fa fa-icon" />
            </div>
            {showButtons && (
                <div className="absolute top-full left-0 mt-2">
                    <div className="bg-white rounded p-4 flex flex-col">
                        <button className="w-[50px] bg-transparent text-black rounded mb-2" onClick={openModal}>
                            <span className="inline-block">編輯</span>
                        </button>
                        <button className="w-full bg-transparent text-black rounded" onClick={handleDelete}>
                            <span className="inline-block">刪除</span>
                        </button>
                    </div>
                </div>
            )}
            {isOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">編輯留言</h2>
                        <form className=' border-gray-500'>
                            <input type='text' value={content} className='mb-4 w-[300px]' />
                        </form>
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-200 text-black font-bold py-2 px-4 rounded mr-2"
                                onClick={closeModal}
                            >
                                取消
                            </button>
                            <button
                                className="bg-gray-600 text-white font-bold py-2 px-4 rounded"
                                onClick={() => {
                                    
                                    closeModal();
                                }}
                            >
                                編輯
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;

