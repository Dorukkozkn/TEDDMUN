"use client"

import { useState } from "react"

export function SecretariatLetter() {
  const [activeTab, setActiveTab] = useState<"secretariat" | "directoria">("secretariat")

  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("secretariat")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "secretariat"
                  ? "bg-accent text-white"
                  : "bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Secretariat Letter
            </button>
            <button
              onClick={() => setActiveTab("directoria")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "directoria"
                  ? "bg-accent text-white"
                  : "bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Directoria Letter
            </button>
          </div>

          <div className="bg-white dark:bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {activeTab === "secretariat" ? (
              <>
                <p className="text-lg font-semibold text-black mb-6">Dear Delegates,</p>

                <div className="space-y-4 text-black leading-relaxed">
                  <p>We are delighted to welcome you to TEDDMUN 2026.</p>

                  <p>
                    During this conference, you will have the chance to sharpen your diplomatic abilities, exchange
                    ideas with participants from various communities, and take part in discussions that challenge your
                    perspective.
                  </p>

                  <p>
                    Throughout the three days, you will explore major global issues, work toward creative solutions, and
                    gain insights that will support your personal and academic growth. We encourage every delegate to
                    express their views confidently, listen with an open mind, and uphold a respectful and professional
                    atmosphere in every session.
                  </p>

                  <p>
                    As the Secretariat, our wish is that TEDDMUN 2026 becomes an experience that empowers you as
                    emerging leaders, broadens your understanding of the world, and helps you build meaningful
                    friendships that continue long after the conference ends.
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200">
                  <p className="text-black font-medium mb-6">Sincerely,</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg font-bold text-black">Deniz Akça</p>
                      <p className="text-accent font-medium">Secretary-General</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold text-black">Ada Güven</p>
                      <p className="text-accent font-medium">Deputy Secretary-General</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-lg font-semibold text-black mb-6">Our most dear delegates,</p>

                <div className="space-y-4 text-black leading-relaxed">
                  <p>
                    We, as the directoria of this conference have put in as much effort as we could to make these 3 days
                    the best MUN experience of your lives. It was tiring at times but was still worth it in the end, we
                    have prepared only the best for you and we hope you enjoy your time during this event.
                  </p>

                  <p>
                    It is a great honor to be hosting an MUN conference after all this time, we expect to see all of
                    you!
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg font-bold text-black">Balamir Sertaç İşel</p>
                      <p className="text-accent font-medium">Director-General</p>
                    </div>

                    <div>
                      <p className="text-lg font-bold text-black">Emir Çınar</p>
                      <p className="text-accent font-medium">Deputy Director-General</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
