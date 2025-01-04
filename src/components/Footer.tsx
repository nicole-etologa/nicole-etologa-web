import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#8c8cdc] text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center md:items-center">
          <SocialIcons className="mb-4 text-white" />
          <p className="text-sm">© 2025 Nicole Etologa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

