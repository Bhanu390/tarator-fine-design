import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FullMenuProps {
  onNavigate: (page: string) => void;
}

export default function FullMenu({ onNavigate }: FullMenuProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Tarator-Menu.pdf';
    link.download = 'Tarator-Menu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl text-primary mb-6">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our full range of Mediterranean delights, from all-day brunch to artisan sandwiches and authentic plates.
          </p>
          <Button 
            onClick={handleDownload}
            className="bg-[#B43F3F] hover:bg-[#932F2F] text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Menu PDF
          </Button>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* ALL DAY BRUNCH */}
          <div className="mb-12">
            <h2 className="font-heading text-4xl text-primary mb-8 border-b-2 border-[#B43F3F] pb-4">ALL DAY BRUNCH</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Eggs on Toast</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$12</span>
                  </div>
                  <p className="text-gray-600 text-sm">Choice of poached, fried or scrambled eggs, served on sourdough toast.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Bacon and Egg Roll</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$16</span>
                  </div>
                  <p className="text-gray-600 text-sm">2 fried eggs, 2 slices of bacon, tasty cheese, smoked tomato relish, served on a milk bun.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Avo Toast</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$22.5</span>
                  </div>
                  <p className="text-gray-600 text-sm">Toasted sourdough, smashed avocado, olive oil, cherry tomatoes, savory granola, radish, feta, 1 poached egg, and herbs.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Shakshuka</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$24.5</span>
                  </div>
                  <p className="text-gray-600 text-sm">Tomato sauce, poached eggs, sujuk, paprika, pickled onions, olives, green herb oil, lemon zest, baby parsley, and sourdough toast.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Bircher Muesli</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$19.5</span>
                  </div>
                  <p className="text-gray-600 text-sm">Oats soaked in vanilla oat milk, honey, grated apple, sultanas and nuts. Topped with pistachio and compote fruits.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">French Toast</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$21.5</span>
                  </div>
                  <p className="text-gray-600 text-sm">Brioche dipped in cinnamon-vanilla batter, lightly grilled. Served with creamy lemon ricotta, berries & maple.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Turkish Eggs</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$22.5</span>
                  </div>
                  <p className="text-gray-600 text-sm">Garlic yoghurt, grilled sujuk, two poached eggs, chilli oil, fresh herbs, served with sourdough toast.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Mushroom Eggs Benedict</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$23.9</span>
                  </div>
                  <p className="text-gray-600 text-sm">Roasted flat mushroom, poached eggs, fresh mixed salad, bacon, topped with homemade hollandaise, herb oil, and chives.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Chili Scramble Eggs</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$22.5</span>
                  </div>
                  <p className="text-gray-600 text-sm">Turkish bread, scrambled eggs, mixed greens, chilli oil, crispy sujuk, and baby parsley.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Omelette on Turkish Bread</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$21.5</span>
                  </div>
                  <p className="text-gray-600 text-sm">Choice of: Mushrooms, spinach & cheese | Sun dried tomatoes, Spanish onions & tasty cheese | Sujuk, Spanish onions, chili flakes, spinach & feta | Virginian ham & tasty cheese</p>
                </div>
              </div>
            </div>
          </div>

          {/* SANDWICHES */}
          <div className="mb-12">
            <h2 className="font-heading text-4xl text-primary mb-8 border-b-2 border-[#B43F3F] pb-4">SANDWICHES & WRAPS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Prosciutto and Ricotta</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$24</span>
                  </div>
                  <p className="text-gray-600 text-sm">Prosciutto, ricotta, cherry tomatoes, rocket, and balsamic glaze on ciabatta.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Chicken Schnitzel</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$22</span>
                  </div>
                  <p className="text-gray-600 text-sm">Crispy chicken schnitzel, lettuce, tomato, cheese, and aioli on Turkish bread.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Grilled Halloumi</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$20</span>
                  </div>
                  <p className="text-gray-600 text-sm">Grilled halloumi, roasted vegetables, pesto, and rocket on sourdough.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Mediterranean Wrap</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$18</span>
                  </div>
                  <p className="text-gray-600 text-sm">Falafel, hummus, tabouli, pickles, and tahini sauce in a warm wrap.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Chicken & Avocado Wrap</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$19</span>
                  </div>
                  <p className="text-gray-600 text-sm">Grilled chicken, avocado, lettuce, tomato, cheese, and aioli.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">Lamb Kofta Wrap</h3>
                    <span className="text-[#B43F3F] font-bold text-lg">$21</span>
                  </div>
                  <p className="text-gray-600 text-sm">Spiced lamb kofta, hummus, tabouli, pickled onions, and garlic sauce.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MEDITERRANEAN PLATES */}
          <div className="mb-12">
            <h2 className="font-heading text-4xl text-primary mb-8 border-b-2 border-[#B43F3F] pb-4">MEDITERRANEAN PLATES</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-xl">Mezze Platter</h3>
                  <span className="text-[#B43F3F] font-bold text-lg">$28</span>
                </div>
                <p className="text-gray-600 text-sm">Hummus, baba ganoush, tabouli, falafel, dolmades, olives, and warm pita bread.</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-xl">Grilled Lamb Skewers</h3>
                  <span className="text-[#B43F3F] font-bold text-lg">$32</span>
                </div>
                <p className="text-gray-600 text-sm">Marinated lamb skewers, served with rice, salad, and tzatziki.</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-xl">Chicken Souvlaki</h3>
                  <span className="text-[#B43F3F] font-bold text-lg">$29</span>
                </div>
                <p className="text-gray-600 text-sm">Grilled chicken skewers, Greek salad, chips, and garlic sauce.</p>
              </div>
            </div>
          </div>

          {/* BEVERAGES */}
          <div>
            <h2 className="font-heading text-4xl text-primary mb-8 border-b-2 border-[#B43F3F] pb-4">BEVERAGES</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-2xl text-primary mb-4">Coffee</h3>
                <div className="flex justify-between">
                  <span>Espresso</span>
                  <span className="text-[#B43F3F]">$4</span>
                </div>
                <div className="flex justify-between">
                  <span>Cappuccino</span>
                  <span className="text-[#B43F3F]">$4.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Latte</span>
                  <span className="text-[#B43F3F]">$4.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Flat White</span>
                  <span className="text-[#B43F3F]">$4.5</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-2xl text-primary mb-4">Fresh Juices</h3>
                <div className="flex justify-between">
                  <span>Orange Juice</span>
                  <span className="text-[#B43F3F]">$7</span>
                </div>
                <div className="flex justify-between">
                  <span>Green Juice</span>
                  <span className="text-[#B43F3F]">$8</span>
                </div>
                <div className="flex justify-between">
                  <span>Berry Smoothie</span>
                  <span className="text-[#B43F3F]">$9</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-2xl text-primary mb-4">Other</h3>
                <div className="flex justify-between">
                  <span>Tea</span>
                  <span className="text-[#B43F3F]">$4</span>
                </div>
                <div className="flex justify-between">
                  <span>Turkish Coffee</span>
                  <span className="text-[#B43F3F]">$5</span>
                </div>
                <div className="flex justify-between">
                  <span>Soft Drinks</span>
                  <span className="text-[#B43F3F]">$4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleDownload}
            className="bg-[#B43F3F] hover:bg-[#932F2F] text-white text-lg px-8 py-6"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Complete Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
