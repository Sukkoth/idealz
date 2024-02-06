import Button from "../ui/Buttons/Button";
import Banner from "../ui/Offers/Banner";

function Offers() {
  return (
    <div className='p-4'>
      <h1 className='text-4xl text-rowdies'>Offers</h1>
      <div className='mt-5 space-y-5'>
        <Banner
          title=' GET 20% OFF!'
          header='BUNDLE OFFER'
          content=' Add both Changan Alsvin & License Plate T-32323 campaigns'
          button={
            <Button type='light' className='w-[10rem]'>
              Add To Cart
            </Button>
          }
          gradient='from-pink-500 to-blue-700'
        />
        <Banner
          title='WhatsApp Channel'
          header='Follow Our'
          content='For Exclusive offers and discounts'
          gradient='from-green-400 to-green-800'
        />
        <Banner
          gradient='from-orange-400 to-orange-700'
          title='Get 10% Extra'
          header='Top up your account'
          content='on Binance top-up'
          button={
            <Button type='light' className='w-[10rem]'>
              Top Up
            </Button>
          }
        />
      </div>
    </div>
  );
}

export default Offers;
