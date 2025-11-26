"use client";

const VisionMission = () => {
  return (
    <div className="bg-dark text-white rounded-3xl lg:px-16 px-4 py-12 mb-12">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <p className="text-20 font-semibold text-white">Visi, Misi &amp; Motto</p>
        </div>
        <div className="bg-heroBg dark:bg-darkmode rounded-3xl px-6 py-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M12 2C8.134 2 5 5.134 5 9c0 3.105 2.009 5.725 5 6.68V18h2v-2.32c2.991-.955 5-3.575 5-6.68 0-3.866-3.134-7-7-7zm1 15h-2v-1h2v1zm0-3h-2v-3h2v3z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="max-w-md">
                <h3 className="font-semibold text-midnight_text dark:text-white text-lg mb-2">
                  Visi <span className="text-primary">Kami</span>
                </h3>
                <p className="text-muted dark:text-white dark:text-opacity-80 text-sm md:text-base leading-relaxed">
                  Menjadi perusahaan yang dapat dihandalkan dan dipercaya dengan komitmen untuk selalu tumbuh berkembang guna memberikan pelayanan yang prima.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2.2a7.8 7.8 0 110 15.6 7.8 7.8 0 010-15.6zm0 3a4.8 4.8 0 104.8 4.8A4.8 4.8 0 0012 7.2zm0 2a2.8 2.8 0 11-2.8 2.8A2.8 2.8 0 0112 9.2z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="max-w-md">
                <h3 className="font-semibold text-midnight_text dark:text-white text-lg mb-2">
                  Misi <span className="text-primary">Kami</span>
                </h3>
                <ul className="text-muted dark:text-white dark:text-opacity-80 list-disc list-inside space-y-2 text-sm md:text-base pl-4">
                  <li>Membangun dan menjaga kerjasama yang profesional, unggul, dan kompeten.</li>
                  <li>Melakukan pengembangan terus menerus untuk meningkatkan kualitas pelayanan.</li>
                  <li>Komitmen untuk menjaga kepercayaan mitra demi kelangsungan bisnis yang berkelanjutan.</li>
                  <li>After sales service yang baik dan quick response.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-dark text-white rounded-2xl p-6 lg:max-w-3xl mx-auto">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full shadow-lg">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2l2.59 5.25L20 8.27l-4 3.9L17 17.69 12 16l-5 1.69L6 12.17 2 8.27l5.41-.52L12 2z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-midnight_text dark:text-white text-lg mb-2">
                  Motto <span className="text-primary">Kami</span>
                </h3>
                <p className="text-muted dark:text-white dark:text-opacity-80 text-lg font-medium">
                  “Good Plan, Good Results.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;

