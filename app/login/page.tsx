import { getServerSession } from "next-auth";
import LoginBtn from "../../components/LoginBtn";
// import authOptions from "@/lib/auth";
import { redirect } from "next/navigation";
const page = async () => {
    // const session = await getServerSession(authOptions);

    // if (session) {
    //   return redirect("/");
    // }

    return (
        <div>
            <LoginBtn/>
        </div>
    )
}

export default page