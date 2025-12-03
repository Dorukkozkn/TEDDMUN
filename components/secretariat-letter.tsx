export function SecretariatLetter() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
            Secretariat Letter
          </h2>

          <div className="bg-white dark:bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg font-semibold text-black mb-6">Dear Delegates,</p>

            <div className="space-y-4 text-black leading-relaxed">
              <p>We are delighted to welcome you to TEDDMUN 2026.</p>

              <p>
                During this conference, you will have the chance to sharpen your diplomatic abilities, exchange ideas
                with participants from various communities, and take part in discussions that challenge your
                perspective.
              </p>

              <p>
                Throughout the three days, you will explore major global issues, work toward creative solutions, and
                gain insights that will support your personal and academic growth. We encourage every delegate to
                express their views confidently, listen with an open mind, and uphold a respectful and professional
                atmosphere in every session.
              </p>

              <p>
                As the Secretariat, our wish is that TEDDMUN 2026 becomes an experience that empowers you as emerging
                leaders, broadens your understanding of the world, and helps you build meaningful friendships that
                continue long after the conference ends.
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
          </div>
        </div>
      </div>
    </section>
  )
}
