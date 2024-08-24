import Container from "../shared/Container";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Title from "./Title";

const Contact = () => {
  return (
    <Container>
      <div className="my-32">
        <Title>Contact</Title>

        {/* category section  */}
        <div className="mt-16 max-w-4xl mx-auto">
          <form>
            {/* name and email  */}
            <div className="flex gap-6">
              <Input
                type="text"
                placeholder="Name"
                className="lg:w-[50%]"
                //   value={name}
              />
              <Input
                type="email"
                placeholder="Email"
                className="lg:w-[50%]"
                //   value={name}
              />
            </div>
            {/* text area        */}

            <div className="flex gap-6 mt-3">
              <Textarea placeholder="Your Text" className="lg:w-[100%]" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
