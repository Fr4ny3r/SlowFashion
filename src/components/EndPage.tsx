
function EndPage() {
  return (
 <footer>
      <div className="bg-[#1f1135] text-gray-200 p-10 flex justify-around flex-wrap gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Email: info@SlowFashion.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Fashion St, Style City, Country</p>
        </div>
        <div className="flex gap-5 mt-5 items-center justify-center">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
          <p className="mt-5 w-screen text-center">&copy; 2024 F.Slow. All rights reserved.</p>        
      </div>
    </footer>
  )
}

export default EndPage