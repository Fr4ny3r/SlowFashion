
function About() {
  return (
   <main>
      <div id='other-title' className="my-30 h-[400px] bg-gray-300 text-6xl overflow-hidden relative">
        <img
          className='absolute contrast-130 img-titles z-1 w-full -translate-y-135 object-cover opacity-40 hover:scale-110 transition-[transform, scale] duration-2000'
          src='https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='image'
        />
        <div className='siShadow opacity-100 text-gray-100 relative z-10 p-10 text-[#1f1135] w-full h-full flex flex-col justify-center items-center'>
          <h1 className="text-7xl font-black left-0 -ml-7">F.Slow_</h1>
          <p className=" z-10000 text-2xl mt-5 text-center max-w-3xl">At F.Slow, we believe in the power of slow fashion to create a more sustainable and ethical world. Our mission is to provide high-quality, timeless pieces that not only make you look good but also make you feel good about your choices.</p>
        </div>
      </div>
    </main>
  )
}

export default About