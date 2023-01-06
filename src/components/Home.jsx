export default function Home() {
  return (
    <div className="flex justify-center mb-52 gap-16">
      <div className="w-[530px] self-center ml-4">
        <div>
          <h1 className="text-[55px]">Kendi Hashimoto</h1>
          <h2 className="text-[32px]">Desenvolvedor Front-end</h2>
        </div>
        <div className="flex gap-8 mt-10">
          <button className="miniButtons">
            <a
              className="flex text-base"
              target="_blank"
              href="https://github.com/KendiHashimoto"
            >
              <img
                className="ml-[13px]"
                src="../../../assets/icons/github.svg"
                alt="Github icon"
              />
              <span className="m-auto">Github</span>
            </a>
          </button>
          <button className="miniButtons">
            <a
              className="flex text-base"
              target="_blank"
              href="https://www.linkedin.com/in/kendi-hashimoto-202359220/"
            >
              <img
                className="ml-[13px]"
                src="../../../assets/icons/linkedin.svg"
                alt="Linkedin icon"
              />
              <span className="m-auto">Linkedin</span>
            </a>
          </button>
        </div>
      </div>

      <div className="w-[530px] h-[300px] flex justify-center">
        <img
          className="border-[1px] border-white drop-shadow-2xl"
          src="../../../assets/images/kendicartoon.png"
          alt="Hashimoto cartoon"
        />
      </div>
    </div>
  )
}