import CustomerList from "@/components/Customers/CustomerList"

export default function page() {
    return (
        <div className="flex items-center pt-40 flex-col gap-20 justify-start min-h-screen">
            <h1 className="text-5xl">Customers</h1>
            <CustomerList />
        </div>
    )
}
