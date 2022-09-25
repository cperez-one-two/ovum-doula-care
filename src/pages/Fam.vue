<template>
<DocstyleLayout>
<div id="fam-outer-wrap" class="flex text-black">
  <button @click="isOpen = !isOpen" class="fixed z-50 w-16 h-16 rounded-full bg-yellow bottom-4 right-4 text-off-white lg:hidden" type="button">
    <span class="sr-only">Open Page Navigation</span>
      <svg v-if="!isOpen" class="absolute w-6 h-6 fill-current top-1/3 left-1/3 text-off-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        <title>Page Navigation</title>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="absolute w-6 h-6 mb-1 mr-1 fill-current left-1/4 top-1/4 text-off-white" viewBox="0 0 20 20" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        <title>Close</title>
      </svg>
  </button>
  <div id="sidebar-wrap" :class="isOpen ? 'block' : 'hidden'" class="fixed z-40 flex-none w-full h-screen overflow-y-auto top-3 lg:sticky top-12 bg-off-white lg:block lg:w-72 xl:w-80">
    <div id="sidebar" class="pt-10">
      <div v-for="(title, i) in titles" :key="i">
        <ul>
          <li class="text-xl text-cream-dark hover:bg-opacity-40 hover:bg-olive active:bg-opacity-100"><a @click="isOpen = !isOpen" :href="'#'+title[1]"><p class="px-4 py-3">{{title[0]}}</p></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div id="fam-content-wrap" class="flex-shrink px-10 pt-10 sm:px-16">
    <div id="fam-content" class="max-w-4xl text-lg">
        <h1 class="py-16 font-mono text-5xl text-center md:text-left lg:text-6xl">Fertility Awareness Method</h1>
        <h2 id="fam-about" class="pt-16 pb-10 text-3xl font-bold">What Is FAM and what is a Fertility Awareness Educator?</h2>
        <p class="pt-5">The Fertility Awareness Method is a scientific sympto-thermal method of fertility tracking that focuses on identifying primary and secondary fertility signs in order to identify someone’s fertile period. The primary fertility symptoms that are tracked daily are the cervical position, cervical fluid, and basal body temperature. These three symptoms follow a specific and non-unique pattern and are used to cross-check and confirm fertility. As a person becomes more fertile, the cervix raises and becomes soft and open, the cervical fluid changes in consistency to become more wet, and the basal body temperature lowers. After release of an egg, the cervix rises and becomes firm and closed, the cervical fluid dries up, and the temperature spikes. The reason for these changes is rooted in achieving the optimal conditions for reproduction, and observing them can be used to both prevent and achieve pregnancy. The practice of charting refers to the daily recording of these symptoms to confirm fertility. </p>
        <p class="pt-5"><b>**Note, this method is NOT the rhythm method.</b> The rhythm method is often practiced assuming that menstruation cycles will be the same every cycle with ovulation and menstruation occurring on the same days each time making it predictable. Our bodies are not machines, each person and each cycle is different. The fertility awareness method is the act of engaging in your own unique pattern with the understanding that it could change. It is a daily practice of checking in, inspiring greater connection with the self, and with one’s health.</p>
        <p class="pt-5">Fertility Awareness educators are the mythbusters of the women’s reproductive health world. They are the ambassadors of correcting misinformation. They focus on the individual’s cycle and disregard the idea that everyone’s cycle is alike. Doctors, in comparison, are experts on the population and average, and not the individual.</p>
        <p class="pt-5">When you look up the Fertility Awareness Method on the CDC website the results are dismal. Unfortunately this is the way most people discredit this method, allowing it to look like a poor form of birth control. What they don’t know is that on the CDC they combine all fertility awareness methods into one category including family planning and the rhythm method. It is also widely taught that every person’s cycle is 28 days with ovulation on day 14 which is only an average and leads to many unplanned pregnancies.
        <p class="pt-5">When you separate the fertility awareness method from the rest of the fertility awareness based methods, the accuracy is 99.6% effective with perfect use and 98.2% effective with human error. This is similar or higher than the birth control pill or condoms.
        <p class="pt-5">Unfortunately, FAM is only effective as the individual is at practicing it. In western medicine, the individual’s experience is not often focused on and the average often supplements the unique case. Because of our cultural and historical values there is less faith in the patient’s ability to know their body, less focus on body literacy or autonomy, and less education which leads to misinformation.
        <h2 id="charting-rules" class="pt-16 pb-10 text-3xl font-bold">Charting rules:</h2>
          <div class="relative w-8/12 mx-auto rounded shadow-lg h-1/3">
            <g-image src="~/assets/images/000000.png"
                     alt="charting graph"
                     class="mb-16 rounded shadow-lg"
              ></g-image>
          </div>
            <p class="pt-5">Charting involves observing fertility signs. There are two types of fertility signs, the primary which include the cervical fluid,  basal body temperature and position of the cervix, and secondary which is unique to the individual or cycle. Some secondary fertility signs could include changes in breast size, headaches, sex drive, etc.</p>
            <p class="pt-5">The techniques that should be used to observe cervical fluid include:</p>
          <ul class="pt-3 list-disc list-inside">
            <li>The sensation of your vulva without touching</li>
            <li>An observation at least twice a day to let gravity pull the cervical fluid down</li>
            <li>Remembering that the texture is more important than the appearance</li>
            <li>Dry cervical fluid can be compared to the feeling of swiping a finger in the inside of your cheek.</li>
            <li>Your peak day is the LAST day of fertile cervical fluid</li>
            <li>Your post peak count is 4 days after your peak day and you must wait until the evening of your fourth day</li>
            <li>Your basal body temperature must be taken after three hours of uninterrupted sleep.</li>
            <li>Your thermometer must be a 30 second read</li>
          </ul>

          <h2 id="fam-history" class="pt-16 pb-10 text-3xl font-bold">FAM History</h2>
          <p class="pt-5">People with uteruses have been using fertility awareness tracking methods for as long as we have been on this planet. The first use of these methods was in indigenous peoples who used observation of their bodies to identify their fertile window.</p>
          <p class="pt-5">The Family planning method was birthed from the catholic church. Because of these religious connotations it also had to follow their values making family planning only available to heterosexual, married people with the intent to reproduce.</p>
          <p class="pt-5">The invention of the birth control pill was a huge revelation and shift for many people, especially people fighting for women’s rights in the late 50’s.</p>
          <p class="pt-5">In the 60s and 70s second wave feminism brought awareness of natural methods back to American consciousness from their Catholic roots. They also wanted a natural alternative to synthetic hormones.</p>
          <p class="pt-5">Many people today still practice Natural Family Planning with the church and many people are starting to practice Fertility Awareness Based Methods, using sympto-thermal body markers to identify their fertile period. These methods are often confused with the rhythm method which is reliant upon past cycles to predict future cycles making it unreliable and inaccurate.</p>
          <h2 id="hormonal-contraceptives" class="pt-16 pb-10 text-3xl font-bold">Hormonal Contraceptives</h2>
    <figure class="max-w-3xl p-8 mx-auto my-5 border-l-8 rounded-lg bg-off-white shadow-sm border-yellow">
      <blockquote><em>
          “In modern medical practice the cycle itself is often seen as the culprit and it’s assumed that if the cycle is switched off, or artificially regulated, then the problem will be solved.”</em></blockquote>
      <figcaption><cite>Bennett and Pope, 2008. Pg. 95</cite></figcaption>
    </figure>
    <p class="pt-5">Like many things, the history of hormonal contraceptives is mixed and complicated. One valid truth is that The Pill was a huge step in women’s liberation and has helped many people manage their intimate lives without procreating. It was a fight to obtain this, and has served in many ways. Unfortunately, because it stemmed from women’s oppression, there are still injustices being done to female bodied people every day in regards to their reproductive health. This starts with the lack of transparency about the side effects and health risks of taking synthetic hormones to the testing on Puerto Rican women in the early stages of inventing the pill. This can even go back to the absence of education on female reproductive processes and a purposeful disconnect with the female body. Many people across the globe remain uneducated about their own bodies and reproductive health their entire lives. Instead of celebrating the natural cycles of our bodies, we are taught to fear them (partially because they’re unknown) and to control them. If female bodied people were taught about menstruation, ovulation, how to read fertility signs and take care of our hormonal systems, a lot would be different. This isn’t to say some people wouldn’t choose to take the pill, but our consent to synthetic hormones would be educated and rooted in understanding.</p>
    <figure class="max-w-3xl p-8 mx-auto my-5 border-l-8 rounded-lg bg-off-white border-yellow shadow-sm">
      <blockquote><em>“By blaming women the medical establishment was divorcing women from their own bodies and making the female body an object of and a source for fear and oppression. If they had physical health issues women were told to blame themselves and their faulty, weak bodies.” </em></blockquote>
      <figcaption>-Grigg-Spall. <cite>2013, pg.32</cite></figcaption>
    </figure>
    <h3 class="pt-5 font-bold">How does hormonal birth control work?</h3>
    <figure class="max-w-3xl p-8 mx-auto my-5 border-l-8 rounded-lg bg-off-white shadow-sm border-yellow">
      <blockquote >
        <em>“Of great concern are the remote, hidden and ever-mounting changes within the human race, resulting from the accumulative effect of hormonal manipulation on succeeding generations. The use of the Pill must be regarded as one of the most serious and influential causes of iatrogenic disease. (disease caused by a doctor).”</em>
      </blockquote>
      <figcaption>
        -Dr. David Lilley, <cite>Medical Practitioner and homeopath</cite>
      </figcaption>
    </figure>
    <h3 class="pt-5 font-bold">The Drug</h3>
    <p class="pt-5">The Hormonal birth control pill is made up of synthetic hormones that mimic your natural hormones. For a long time, “…medical practitioners believed that the uterus worked in competition with the brain.” (Grigg-Spall, 2013 pg.30) They didn’t believe that they could work together. Natural hormones in the body are in a delicate balance naturally produced in small amounts to spur healthy functioning. In hormonal birth control there is 4 times the amount of synthetic hormone than our naturally occurring counterparts even at the peak of a cycle.  The ingredients of different pills include: oestradiol, mestranol, levonorgestrel, norethisterone, desogestrel, gestodene, ethinyl, acetate and more. These synthetic hormones cause temporary infertility by acting on your endocrine system and mimicking a pregnancy. Most notable of these changes are prevention of ovulation, changes in endometrium which prevents an egg from implanting, and changes in cervical fluid causing an inhabitable environment for sperm. This causes your body to be on high alert most of the time.</p>
    <h3 class="pt-5 font-bold">Synthetic Hormones/ Endocrine disruptors</h3>
    <p class="pt-5">Hormonal health is important! Many current studies speak widely about endocrine disruptors and how to rid your home of chemical products in cleaners, body products and food. However, synthetic hormone consumption in birth control is hardly ever mentioned and it is one of the biggest disruptions to the endocrine system. Your endocrine system works as the homeostasis system of your body. It connects your inner world to your outer world through stimulus. It resides in the hypothalamus, the master endocrine gland which gathers hormonal messages from your organs and glands and summons the pituitary gland to send messages back to your body, keeping a hormonal balance. This system helps with everything, from waking up to coping with stress to digestion to sleep.</p>
    <h3 class="pt-5 font-bold">Side Effects:</h3>
    <p class="pt-5">The main thing that synthetic hormones impact is the endorphin system specifically our sex hormones. Because our sex hormone cycle regulates 150 different bodily systems, and because our sex hormones are profoundly interconnected with our neurological and immunological systems, hormonal birth control impacts:</p>
    <ul class="pt-3 list-disc list-inside">
      <li>Energy Levels</li>
      <li>Memory and concentration</li>
      <li>Motor coordination</li>
      <li>Adrenalin Levels</li>
      <li>Pain Threshold</li>
      <li>Vitamin Retention</li>
      <li>Blood glucose levels</li>
      <li>Thyroid and Adrenal Function</li>
      <li>Sleep Patterns</li>
      <li>Body Temperature</li>
      <li>Skin color and Texture</li>
      <li>Brain Wave Patterns</li>
      <li>Metabolism Rate</li>
      <li>Visual, Auditory and olfactory acuity</li>
      <li>Concentrations of vitamins</li>
      <li>Immune System (Grig-Spall, 2013 pg. 44)</li>
    </ul>

    <p class="pt-5">And because of these disturbing facts, the side effects are immense. Some of the most common side effects are:</p>
      <ul class="pt-3 list-disc list-inside">
        <li>
          <h4 class="inline-block pt-2 font-semibold">Headaches:</h4>
          <p class="inline"> Migraine and non-migraine headaches occur mostly during the placebo-pill week. They are a monthly withdrawal symptom to the hormones.</p>
        </li>
        <li>
          <h4 class="inline-block pt-2 font-semibold">Malnutrition:</h4>
          <p class="inline"> A major health complication caused by taking hormonal contraceptives is nutritional disturbance. The severity of this can be determined by the individual’s nutritional intake before beginning taking hormonal contraceptives, but at the end of the day the synthetic hormones affect the metabolism itself. A FULL LIST OF IMPACTED VITAMINS AND MINERALS CAN BE FOUND IN APPENDIX 2 IN “THE PILL, ARE YOU SURE IT’S FOR YOU?” BY JANE BENNETT AND ALEXANDRA POPE ON PAGE 276.</p>
        </li>
        <li>
          <h4 class="inline-block pt-2 font-semibold">Vitamins:</h4>
          <p class="inline"> The vitamins impacted by the pill are A, B1, biotin, E, B6, B12, folic acid,  C, riboflavin, and thiamine.This can cause a plethora of problems including declining gum health, eye irritation, anxiety, depression, nausea, impaired libido, candida imbalance, and more</p>
        </li>
        <li>
          <h4 class="inline-block pt-2 font-semibold">Minerals:</h4>
          <p class="inline"> Zinc, (Increased) copper, Iron, Calcium, potassium, selenium, and magnesium are all impacted by taking synthetic hormones. Among other things, this can cause anxiety, muscle cramps, sugar cravings, insomnia, immune dysfunction, diabetes, healthy pregnancy and birth (specifically zinc insufficiency).</p>
        </li>
        <li class="pt-2">Gum health (Partially caused by B2 deficiency which can cause gum and mouth infections)</li>
        <li>Suppressed Adrenal Gland function</li>
        <li>Mood swings</li>
        <li>Weight gain (Specifically with Depo-Provera)</li>
        <li>Brittle bones</li>
        <li>Suppressed Immune functioning</li>
      </ul>
      <figure class="max-w-3xl p-8 mx-auto my-5 border-l-8 rounded-lg bg-off-white shadow-sm border-yellow">
        <blockquote>
          <em>“It was decided by sex endocrinologists that women had a cyclical hormone regulation and men a “stable” hormone regulation. Today men are generally considered to have relatively stable hormone levels and women are described as having erratic and unpredictable hormone levels.” </em>
        </blockquote>
        <figcaption>-Grigg-Spall <cite>2013, pg.51</cite></figcaption>
      </figure>
    <h3 class="pt-5 font-bold">Informed Consent</h3>
    <p class="pt-5">What is informed consent?</p>

    <p class="pt-5">Oftentimes when someone is presented with a pill or drug, for many things but especially hormonal contraceptives, they are not given all the information about how it will affect their bodies long term. In the West, there is a lot of blind trust in medical doctors, which isn’t a bad thing but sometimes we aren’t getting the full story. This could be for a plethora of reasons. Informed consent is consenting to a health treatment only after you’ve received all the information.</p>

    <p class="pt-5">‘Five ways to inform yourself:</p>
    <ul class="list-disc list-inside">
      <li>learn as much as you can about your body.</li>
      <li>assume that your body’s natural rhythms and processes are there for a reason</li>
      <li>research all health care alternatives and remember that ads, and top internet sites, are placed there by those who have the money to do so., This doesn’t mean they necessarily have the best information.</li>
      <li>pay attention to how you feel and follow your instincts</li>
      <li>consult knowledgeable, health conscious women about how they manage their reproductive health.” (Bennett and Pope, 2008. pg.132)</li>
    </ul>
    <figure class="max-w-3xl p-8 mx-auto my-5 border-l-8 rounded-lg bg-off-white shadow-sm border-yellow">
      <blockquote>
      <p>“Neither pregnancy or fertility should be viewed as an illness that requires treatment with pharmaceuticals or surgery.” </p>
      </blockquote>
      <figcaption>-Grigg-Spall, <cite>2013. pg.74</cite></figcaption>
    </figure>
    <h2 id="reproductive-facts" class="pt-16 pb-10 text-3xl font-bold">Reproductive Facts</h2>
      <div class="mt-8">
        <g-image src="~/assets/images/00001.jpeg"
                 alt="charting graph"
                 class="mx-auto mb-16 rounded shadow-lg"
          ></g-image>
      </div>
    <p class="pt-5">Anatomy: Getting to know the map</p>
    <ul class="pt-3 list-disc list-inside">
      <li>The female and male body have the same amount of erectile tissue</li>
      <li>The vagina elongates and expands upon arousal. Kind of like an accordion. They call this “tenting”</li>
      <li>The whole uterus raises as we near ovulation.</li>
      <li>Infertile Cervical Fluid is acidic and looks like a net under a microscope</li>
      <li>Fertile Cervical Fluid is alkaline and is full of sugars.</li>
      <li>Fertile Cervical Fluid looks like a fern under a microscope</li>
      <li>Another type of cervical fluid traps sperm with mutations</li>
    </ul>

    <h2 id="hormones-in-the-cycle" class="pt-16 pb-10 text-3xl font-bold">Hormones in the Cycle:</h2>
    <ul class="pt-3 list-disc list-inside">
      <li>The Hypothalamus in the brain is the power center sending hormonal messages to your organs all the time. It’s sending out orders and the pituitary gland carries them out.</li>
      <li>The beginning of the cycle is marked by the follicular phase and is characterized by the raise of estrogen before the release of an egg.</li>
      <li>Within this phase a hormone called GNRH is sent out to start the cycle. FSH is the message sent to ripen the eggs.</li>
      <li>At the peak of ovulation, luteinizing hormone releases the egg.</li>
      <li>The eggs are contained in follicles which are fluid sacks. The eggs need low temperatures to develop, similar to sperm, which is why the first phase of the cycle is marked by cooler temperatures.</li>
      <li>After the egg is released the cycle is taken over by the hormone progesterone.</li>
      <li>progesterone causes thickened lining, high body temps, and is what maintains an early pregnancy</li>
      <li>the broken egg follicle is called a “Corpus Luteum” which literally means yellow body. After ovulation, the corpus luteum takes over production of progesterone for 1216 days.</li>
      <li>once it drops again, menstruation occurs.</li>
      <li>If there are 18 high temperatures in the luteal phase, a pregnancy has started and an embryo is now helping maintain progesterone.</li>
      <li>Usually, there’s about a dozen egg follicles that prepare themselves for ovulation and one dominates while the others dissolve.</li>
      <li>ovulation is an POSITIVE inflammatory process. It inflames until the follicle pops.</li>
      <li>If a person hasn’t ovulated, the bleeding that follows is either withdrawal bleeding (if you’re on a hormonal contraceptive) or breakthrough bleeding.</li>
      <li>  people can also experience bleeding during ovulation.</li>
    </ul>

    <h2 id="hormonal-health-tips" class="pt-16 pb-10 text-3xl font-bold">Hormonal Health Tips:</h2>
    <p class="pt-5">The endocrine system is the name we use to describe the hormonal center of the brain. This system takes a hit any time a change or stressor happens and this puts everything on pause.</p>
    <p class="pt-5">Stress and sex hormones start with the same building blocks but stress takes priority. This makes it hard for them to exist at the same time.</p>
    <p class="pt-5">Potential endocrine disruptors include:</p>
    <ul class="pt-3 list-disc list-inside">
      <li>soy</li>
      <li>weed</li>
      <li>plastic (BPA)</li>
      <li>Chemical filled lotions, shampoos and body products</li>
      <li>Nonorganic tampons or pads</li>
      <li>Non organic makeup</li>
      <li>pesticides</li>
    </ul>
    <p class="pt-5">If you’re curious about the products you use go to EWG.org to look them up. You can also google dirty dozen, clean 15 for a list of veggies to purchase organically if you’re on a budget or they’re less accessible for you. These are the veggies most susceptible to pesticides.</p>

    <p class="pt-5">Things to consume:</p>
    <ul class="list-disc list-inside">
      <li>healthy fats</li>
      <li>fruits/veggies</li>
      <li>fermented things</li>
      <li>use cast iron pans</li>
      <li>Good filtered water</li>
      <li>Buy second hand and be mindful of fire retardants sprayed on clothes at department stores</li>
      <li>Alternatives to chemical cleaning products are baking soda, vinegar, lemons or other natural cleaning products</li>
    </ul>


    <h2 id="recovery" class="pt-16 pb-10 text-3xl font-bold">Recovery:</h2>
    <figure class="max-w-3xl p-8 mx-auto my-5 border-l-8 rounded-lg bg-off-white shadow-sm border-yellow">
      <blockquote>
        <p><em>“We don’t, as a society, give intrinsic value to fertility as a sign of health, of wholeness, of well being, of a body doing OK. We are creating huge problems with this attitude, for individuals and society as a whole.”</em></p>
      </blockquote>
      <figcaption>-Wendy Dumareso, Herbalist</figcaption>
    </figure>
    <h3 class="pt-5 font-bold">“Eight ways to ease difficult periods:</h3>
    <ul class="pt-3 list-disc list-inside">
      <li>Eat regular nourishing meals so your blood sugar levels don’t plummet</li>
      <li>Cut out sugar and white flour products and reduce your coffee, (caffeinated) tea and alcohol intake because they can make you reactive and tetchy</li>
      <li>Get sufficient exercise and rest</li>
      <li>Respect the feelings that do emerge as meaningful even if you don’t always fully understand them</li>
      <li>Keep a journal in which you write, dream, mull, draw and doodle when you’re troubled, want to work things out, figure out your needs and celebrate your successes.</li>
      <li>Practise asserting yourself on smaller issues the whole month long, so that you feel there’s a balance in your relationships</li>
      <li>Pause, think and feel before responding to a request</li>
      <li>Do something special for yourself when you bleed” (Bennett and Pope, 2008. Pg. 176)</li>
      <li>To bring in a little chinese medicine, the liver is the organ in charge of flow of Qi as well as healthy menstruation. It’s also the organ that both physically and energetically deals with the toxins of life. To support your liver is to support a healthy menstrual cycle. Some ways to support the liver are eating real, fresh food. Avoiding toxins in the environment and in your diet. Taking time to slow down, rest and refresh. This is important, not only for healthy cycles but for the health of our culture.</li>
    </ul>
    <h3 class="pt-5 font-bold">“Menstrual Health Tip 3-Lemon water</h3>
    <figure class="max-w-3xl p-8 mx-auto my-5 border-l-8 rounded-lg bg-off-white shadow-sm border-yellow">
      <blockquote>
        <p>To assist your liver and aid digestion take a couple of lemons, ideally organic, scrub well, roughly chop up and place in a class container (it must be glass). Add 2-3 cups of purified water and let it stand for at least 3 hours in the fridge. Enjoy drinking any time you like but especially first thing in the morning and before and after meals.”</p>
    <figcaption>Bennett and Pope, <cite> 2008. Pg. 217</cite></figcaption>
      </blockquote>
    </figure>
    <h3 class="pt-5 font-bold">“Menstrual Health tip 3-Nettle tea</h3>
    <figure class="max-w-3xl p-8 mx-auto my-5 border-l-8 rounded-lg bg-off-white shadow-sm border-yellow">
      <blockquote>
        <p>For a mineral rich tonic that nourishes and stabilises energy in the reproductive/hormonal system, promotes healthy bones, helps ease cramping and profuse menstrual flow and is a great pick-me-up and general all-around ally for women, place two teaspoons of loose dried organic nettles in a jar and top up with one and a half cups of filtered water. Let stand overnight. Drink at room temperature or heat up (without boiling) for a hot drink. You can also make it like a normal tea although you won’t get the full blast of nutrients.” </p>
      </blockquote>
      <figcaption>Bennett and Pope,<cite>2008. Pg.218</cite></figcaption>
    </figure>
    <h3 class="pt-5 font-bold">“Liver tonic formula for Menstruation:</h3>
    <ul class="pt-3 list-disc list-inside">
      <li>2 Parts burdock root</li>
      <li>2 parts dandelion root</li>
      <li>2 parts sassafras (for flavor)</li>
      <li>1 part chaste tree berry</li>
      <li>1 part licorice root</li>
      <li>½ part Ginger” (Gladstar, 2008 pg. 219)</li>
    </ul>
    <p class="pt-5">There are plenty more herbal recipes as well as female reproductive health tips in Rosemary Gladstar’s book Herbal Recipes for Vibrant Health. Bennett and Pope also have many other tips including: Miso Soup, epsom salt baths and reducing commitments. They also recommend upping your magnesium supplements and drinking plenty of water. The biggest take away from the “Recovery” section is Improving diet. This seemingly simple step makes a world’s difference in the reproductive cycle.</p>
    <p class="pt-5"><b>***Remember</b>: If you’ve been on hormonal contraceptives for a long time or have other health issues, you may be eating extremely well and not absorbing any nutrients. Stick with it for a minimum of three months. The body needs time to reboot!</p>
    <h2 id="resources" class="pt-16 pb-10 text-3xl font-bold">Resources:</h2>

    <ul class="pb-20">
      <li>Weschler, Toni. “Taking Charge of Your Fertility” July, 2015</li>
      <li>Weschler, Toni.  <a class="underline" href="http://www.tcoyf.com/">Source</a></li>
      <li>Hauser, Kristin. Healing is within us: <a class="underline" href="http://www.healingiswithinus.com/">Source</a></li>
      <li>Uomoto, Grace. Fearless Fertility: <a class="underline" href="https://www.fearlessfertility.com/">Source</a></li>
      <li>Uomoto, Grace. Pinterest: <a class="underline" href="https://www.pinterest.com/fearlssfrtility/boards/">Source</a></li>
      <li>Bennett, J., &amp; Pope, A. (2008).<cite>The pill: are you sure its for you?</cite> Crows Nest, N.S.W.: Allen &amp; Unwin.</li>
      <li>Gladstar, R. (2008). <cite>Rosemary Gladstars herbal recipes for vibrant health.</cite> Pownal, VT: Storey.</li>
      <li>Grigg-Spall, H. (2013). <cite>Sweetening the pill: or how we got hooked on hormonal birth control.</cite> Winchester, UK: Zero Books, an imprint of John Hunt Publishing Ltd.</li>
    </ul>
    </div>
  </div>
</div>
</DocstyleLayout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Fertility Awareness Method'
  },
  data() {
    return {
      titles: {
        1: ['What is FAM?', 'fam-about'],
        2: ['Charting Rules', 'charting-rules'],
        3: ['FAM History', 'fam-history'],
        4: ['Hormonal Contraceptives', 'hormonal-contraceptives'],
        5: ['Reproductive Facts', 'reproductive-facts'],
        6: ['Hormones in the Cycle', 'hormones-in-the-cycle'],
        7: ['Hormonal Health Tips', 'hormonal-health-tips'],
        8: ['Recovery', 'recovery'],
        9: ['Resources', 'resources'],
      },
      anchors: [
        'fam-about',
        'fam-history',
        'charting-rules',
        'hormonal-contraceptives',
        'reproductive-facts',
        'hormones-in-the-cycle',
        'hormonal-health-tips',
        'recovery',
        'resources'
      ],
      isOpen: false,
    }
  }

}
</script>

<style>

</style>
