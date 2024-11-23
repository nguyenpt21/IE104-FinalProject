import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export default function TicketRefund() {
  return (
    <div className="flex w-full flex-col ">
        <Tabs 
            aria-label="refund" 
            isVertical={true}
            disableAnimation={true}
            className='p-0'
            classNames={{
                slot: "",
                tabList: "gap-[5px] mr-5",
                tab: "h-12", 
                tabContent: `
                    p-3 border-secondary border rounded-md flex-1 text-left text-sm font-medium 
                    text-gray-500 group-data-[selected=true]:text-primary 
                    group-data-[selected=true]:border-primary 
                    group-data-[hover=true]:text-primary 
                    group-data-[hover=true]:border-primary
                `, // Allow text to wrap
            }}
        >
            <Tab key="policy" 
                title="Chính sách hoàn vé" 
                className='p-0'
            >
                <Card className='p-3'>
                    <CardBody className='p-0 text-sm'>
                        <p className='font-semibold text-base mb-3'>
                            Chính sách hoàn vé của bạn
                        </p>
                        <div className='text-sm ml-2'>
                            <p>Các lý do được áp dụng hoàn vé</p>
                            <ul className='list-disc pl-5'>
                                
                                <li>Tự hủy (thay đổi kế hoạch)</li>
                                <li>Bệnh/ốm (tùy thuộc vào sự chấp thuận của Hãng hàng không)</li>
                                <li>Hãng hàng không hủy chuyến bay</li>
                            </ul>
                        </div>
                    </CardBody>
                </Card>  
            </Tab>
            

            <Tab key="fare" title="Phí hoàn vé" className='p-0'>
                <Card className='p-3'>
                    <CardBody className='p-0'>
                        <p className='font-semibold text-base mb-3'>
                            Giá trị hoàn ước tính
                        </p>
                        <div className='text-sm ml-2'>
                            <p>Phí hoàn vé với mỗi trường hợp</p>
                            <ul className='list-disc pl-5'>
                                
                                <li>Tự hủy (thay đổi kế hoạch): 378.000 VND</li>
                                <li>Bệnh/ốm (tùy thuộc vào sự chấp thuận của Hãng hàng không): 0 VND</li>
                                <li>Hãng hàng không hủy chuyến bay: : 0 VND</li>
                            </ul>
                        </div>
                    </CardBody>
                </Card>  
            </Tab>

            <Tab key="steps" title="Quy trình hoàn vé " className='p-0'>
                <Card className='p-3'>
                    <CardBody className='p-0'>
                        <p className='font-semibold text-base mb-3'>
                            Quy trình hoàn lại vé
                        </p>
                        <div className='text-sm ml-2'>
                            <ol className='list-decimal pl-5'>
                                <li>Mở vé điện tử của bạn thông qua Đặt chỗ của tô</li>
                                <li>Đọc chính sách hoàn vé và số tiền ước tính của bạn</li>
                                <li>Hoàn tất các chi tiết và giấy tờ hoàn vé của bạn</li>
                                <li>Gửi yêu cầu hoàn vé của bạn</li>
                            </ol>
                        </div>
                    </CardBody>
                </Card>  
            </Tab>
        </Tabs>
      </div>
  )
}
