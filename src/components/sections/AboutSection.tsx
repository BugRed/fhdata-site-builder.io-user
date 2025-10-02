import FeatureItem from "../ui/FeatureItem";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#0B0A0A] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        <div className="border border-[#7B7B7B] rounded-[40px] bg-transparent p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#FAF6E6] rounded-[10px] inline-flex mb-8 sm:mb-12 md:mb-16">
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M20.1725 6.7499H18.3115L13.7455 11.3139C13.9027 11.7147 13.9172 12.1574 13.7864 12.5676C13.6557 12.9778 13.3876 13.3305 13.0274 13.5663C12.6672 13.8021 12.2368 13.9067 11.8085 13.8625C11.3803 13.8183 10.9803 13.628 10.6758 13.3235C10.3714 13.0191 10.1811 12.6191 10.1369 12.1908C10.0927 11.7626 10.1973 11.3322 10.4331 10.9719C10.6689 10.6117 11.0216 10.3437 11.4318 10.2129C11.842 10.0822 12.2847 10.0966 12.6855 10.2539L17.2505 5.6889V3.8279C17.2506 3.57888 17.3495 3.34007 17.5255 3.1639L19.2555 1.4339C19.2875 1.40168 19.3277 1.37879 19.3717 1.36769C19.4158 1.35659 19.462 1.3577 19.5055 1.3709C19.5945 1.3969 19.6605 1.4709 19.6785 1.5619L20.1385 3.8629L22.4385 4.3229C22.5285 4.3409 22.6025 4.4069 22.6285 4.4959C22.6416 4.53913 22.6428 4.58511 22.6319 4.62896C22.6209 4.6728 22.5983 4.71287 22.5665 4.7449L20.8355 6.4749C20.6595 6.65065 20.4211 6.74954 20.1725 6.7499Z" 
                fill="#408E86"
              />
              <path 
                d="M2.625 12C2.625 14.4864 3.61272 16.871 5.37087 18.6291C7.12903 20.3873 9.5136 21.375 12 21.375C13.2311 21.375 14.4502 21.1325 15.5877 20.6614C16.7251 20.1902 17.7586 19.4997 18.6291 18.6291C19.4997 17.7586 20.1902 16.7251 20.6614 15.5877C21.1325 14.4502 21.375 13.2311 21.375 12C21.375 11.102 21.249 10.234 21.014 9.41301C20.9673 9.2245 20.9955 9.02522 21.0928 8.8571C21.19 8.68899 21.3487 8.56515 21.5353 8.51164C21.722 8.45813 21.9222 8.47913 22.0937 8.57021C22.2653 8.6613 22.3948 8.81537 22.455 9.00001C22.729 9.95401 22.875 10.96 22.875 12C22.875 18.006 18.006 22.875 12 22.875C5.994 22.875 1.125 18.006 1.125 12C1.125 5.99401 5.994 1.12501 12 1.12501C13.015 1.12401 14.024 1.26501 15 1.54401C15.0952 1.5707 15.1841 1.61594 15.2617 1.67713C15.3393 1.73831 15.4041 1.81423 15.4523 1.90053C15.5005 1.98683 15.5311 2.0818 15.5425 2.17998C15.5538 2.27816 15.5457 2.37762 15.5184 2.47264C15.4912 2.56765 15.4455 2.65635 15.3839 2.73364C15.3223 2.81092 15.246 2.87527 15.1595 2.92297C15.0729 2.97068 14.9778 3.00081 14.8795 3.01163C14.7813 3.02244 14.6819 3.01374 14.587 2.98601C13.7457 2.74586 12.8749 2.62436 12 2.62501C9.5136 2.62501 7.12903 3.61273 5.37087 5.37088C3.61272 7.12903 2.625 9.5136 2.625 12Z" 
                fill="#408E86"
              />
              <path 
                d="M7.12474 12C7.12753 12.6624 7.26529 13.3172 7.52959 13.9245C7.79389 14.5318 8.1792 15.0788 8.66199 15.5323C9.14478 15.9857 9.71492 16.336 10.3376 16.5617C10.9603 16.7874 11.6224 16.8839 12.2836 16.8452C12.9448 16.8064 13.5912 16.6334 14.1833 16.3365C14.7753 16.0396 15.3007 15.6252 15.7273 15.1186C16.1538 14.6119 16.4727 14.0236 16.6643 13.3896C16.8559 12.7556 16.9163 12.0892 16.8417 11.431C16.8207 11.2977 16.8362 11.1613 16.8864 11.036C16.9367 10.9108 17.0199 10.8015 17.1272 10.7197C17.2345 10.6379 17.362 10.5867 17.496 10.5714C17.6301 10.5562 17.7658 10.5775 17.8887 10.633C18.1397 10.745 18.3087 10.984 18.3307 11.258C18.486 12.5733 18.2277 13.9042 17.5916 15.0659C16.9556 16.2275 15.9734 17.1622 14.7817 17.7399C13.59 18.3176 12.2479 18.5097 10.9419 18.2895C9.63599 18.0692 8.4311 17.4476 7.49474 16.511C6.55864 15.5755 5.93687 14.3718 5.71567 13.0669C5.49447 11.7621 5.6848 10.4207 6.26027 9.22888C6.83573 8.03706 7.76781 7.05385 8.92723 6.41562C10.0866 5.77739 11.4159 5.51577 12.7307 5.66703C12.8301 5.67626 12.9267 5.70523 13.0147 5.75225C13.1028 5.79927 13.1806 5.8634 13.2435 5.94087C13.3065 6.01834 13.3533 6.1076 13.3813 6.20341C13.4093 6.29923 13.4179 6.39967 13.4066 6.49885C13.3953 6.59802 13.3643 6.69395 13.3154 6.78099C13.2666 6.86803 13.2008 6.94444 13.122 7.00574C13.0432 7.06705 12.953 7.112 12.8566 7.13798C12.7603 7.16396 12.6597 7.17044 12.5607 7.15704C11.8778 7.07807 11.1858 7.14444 10.5303 7.35177C9.87479 7.5591 9.27053 7.90272 8.75719 8.36006C8.24385 8.81741 7.83302 9.37814 7.55168 10.0055C7.27034 10.6328 7.12485 11.3125 7.12474 12Z" 
                fill="#408E86"
              />
            </svg>
            <span className="text-[#252525] font-poppins text-sm sm:text-base font-normal leading-[150%]">
              Quem somos
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="space-y-6 sm:space-y-8 order-1">
              <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[120%] tracking-[-0.72px]">
                <span className="text-white">ESPECIALISTAS EM </span>
                <span className="text-[#408E86]">TRANSFORMAÇÃO DIGITAL</span>
                <span className="text-white"> COM DADOS</span>
              </h2>

              <p className="text-[#B8C1BF] font-poppins text-base sm:text-lg md:text-xl leading-[150%] text-justify">
                A FH Data transforma dados em inteligência que acelera negócios, com resultados que refletem nossa experiência e capacidade de inovação. Com uma equipe multidisciplinar, ajudamos os gestores a tomar decisões assertivas, analisando o passado e prevendo o futuro baseado em dados com uso de IA.
              </p>

              <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6">
                <FeatureItem
                  icon={
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M14.0827 21.2107L22.6107 12.6827L21.6667 11.7387L14.0827 19.3227L10.2827 15.5227L9.33867 16.4667L14.0827 21.2107ZM16.004 28C14.3453 28 12.7853 27.6853 11.324 27.056C9.86356 26.4258 8.59289 25.5707 7.512 24.4907C6.43111 23.4107 5.57556 22.1413 4.94533 20.6827C4.31511 19.224 4 17.6644 4 16.004C4 14.3436 4.31511 12.7836 4.94533 11.324C5.57467 9.86356 6.42844 8.59289 7.50667 7.512C8.58489 6.43111 9.85467 5.57556 11.316 4.94533C12.7773 4.31511 14.3373 4 15.996 4C17.6547 4 19.2147 4.31511 20.676 4.94533C22.1364 5.57467 23.4071 6.42889 24.488 7.508C25.5689 8.58711 26.4244 9.85689 27.0547 11.3173C27.6849 12.7778 28 14.3373 28 15.996C28 17.6547 27.6853 19.2147 27.056 20.676C26.4267 22.1373 25.5716 23.408 24.4907 24.488C23.4098 25.568 22.1404 26.4236 20.6827 27.0547C19.2249 27.6858 17.6653 28.0009 16.004 28Z" fill="currentColor"/>
                    </svg>
                  }
                  title="Metodologia Comprovada"
                  description="Jornada estruturada de 5 níveis para evolução em maturidade de dados e IA"
                />

                <FeatureItem
                  icon={
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M14.6667 19.9999H8L17.3333 1.33325V11.9999H24L14.6667 30.6666V19.9999Z" fill="currentColor"/>
                    </svg>
                  }
                  title="Resultados Rápidos"
                  description="Impacto mensurável em até 90 dias com ROI claro e objetivos definidos"
                />

                <FeatureItem
                  icon={
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M16.0003 15.1801C14.9008 15.1801 13.959 14.7881 13.175 14.0041C12.391 13.2201 11.9994 12.2788 12.0003 11.1801C12.0012 10.0814 12.3928 9.13921 13.175 8.35343C13.9572 7.56766 14.899 7.17699 16.0003 7.18143C17.1017 7.18588 18.0434 7.57699 18.8257 8.35477C19.6079 9.13254 19.9994 10.0748 20.0003 11.1814C20.0012 12.2881 19.6097 13.2294 18.8257 14.0054C18.0417 14.7814 17.0999 15.1721 16.0003 15.1801ZM6.66699 24.8214V22.6268C6.66699 22.0765 6.82699 21.5619 7.14699 21.0828C7.46788 20.6028 7.89899 20.2303 8.44033 19.9654C9.69899 19.3619 10.9585 18.9094 12.219 18.6081C13.4785 18.3059 14.739 18.1548 16.0003 18.1548C17.2617 18.1548 18.5225 18.3059 19.783 18.6081C21.0434 18.9103 22.3021 19.3628 23.559 19.9654C24.1012 20.2303 24.5323 20.6028 24.8523 21.0828C25.1732 21.5619 25.3337 22.0765 25.3337 22.6268V24.8214H6.66699Z" fill="currentColor"/>
                    </svg>
                  }
                  title="Time Especializado"
                  description="Equipe de especialistas em dados, IA e transformação digital"
                />
              </div>
            </div>

            <div className="relative order-2 lg:order-2">
              <div className="relative rounded-[10px] overflow-hidden h-[400px] sm:h-[450px] md:h-[489px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4aef348677489ff371a29c653242a69dab1ef2de?width=1004"
                  alt="Análise de dados e IA"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 right-8 max-w-[283px]">
                  <p className="text-white font-poppins text-lg sm:text-xl font-extrabold leading-[120%] tracking-[-0.6px] text-right">
                    + DE 330 SOLUÇÕES DE
                    <span className="text-[#2AC59E]"> IA</span>
                    <span className="text-white"> E </span>
                    <span className="text-[#2AC59E]">ANALYTICS </span>
                    <span className="text-white">DESENVOLVIDAS EM DIFERENTES ÁREAS</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
