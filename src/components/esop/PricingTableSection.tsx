import { motion } from "framer-motion";

export const PricingTableSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            ESOP Tailored Solutions for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose a plan that aligns with your business vision and employee engagement goals. Our tiered options help companies of all sizes access reliable ESOP consulting Singapore.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="min-w-[800px]"
          >
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-6 text-left text-lg font-bold">ESOP Services</th>
                  <th className="p-6 text-center text-lg font-bold">Basic</th>
                  <th className="p-6 text-center text-lg font-bold">Advanced</th>
                  <th className="p-6 text-center text-lg font-bold border-2 border-accent">Premium</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-border">
                  <td className="p-6 font-semibold">Plan Design</td>
                  <td className="p-6 text-center">Basic design</td>
                  <td className="p-6 text-center">Detailed and tailored design</td>
                  <td className="p-6 text-center bg-accent/5">Highly detailed and customised design</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-6 font-semibold">Documentation Assistance</td>
                  <td className="p-6 text-center">Essential support</td>
                  <td className="p-6 text-center">Comprehensive assistance</td>
                  <td className="p-6 text-center bg-accent/5">Complete support</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-semibold">Implementation & Communication</td>
                  <td className="p-6 text-center">Basic strategy</td>
                  <td className="p-6 text-center">Comprehensive strategy</td>
                  <td className="p-6 text-center bg-accent/5">Tailored and sophisticated strategies</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-6 font-semibold">Administration of ESOP</td>
                  <td className="p-6 text-center">Standard support</td>
                  <td className="p-6 text-center">Enhanced services</td>
                  <td className="p-6 text-center bg-accent/5">Premium-level administration</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-semibold">Accounting and Valuation</td>
                  <td className="p-6 text-center">Basic support</td>
                  <td className="p-6 text-center">Advanced support</td>
                  <td className="p-6 text-center bg-accent/5">Premium-level support</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-6 font-semibold">Regulatory Compliance</td>
                  <td className="p-6 text-center">Essential support</td>
                  <td className="p-6 text-center">Robust support</td>
                  <td className="p-6 text-center bg-accent/5">Comprehensive support</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">Tax Advisory Services</td>
                  <td className="p-6 text-center">General advisory</td>
                  <td className="p-6 text-center">In-depth advisory</td>
                  <td className="p-6 text-center bg-accent/5">Customised and strategic advisory</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
