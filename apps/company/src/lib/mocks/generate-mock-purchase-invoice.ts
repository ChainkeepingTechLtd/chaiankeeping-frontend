import { faker } from "@faker-js/faker"
import { PurchaseInvoice } from "@/pattern/business/molecules/purchase-invoice-columns"

const generateMockPurchaseInvoice = (): PurchaseInvoice => {
    const status = faker.helpers.arrayElement(["draft", "unpaid", "paid", "pending approval"])

    return {
        id: faker.string.uuid(),
        amount: Number.parseFloat(faker.finance.amount({ min: 100, max: 10000, dec: 2 })),
        vendor: faker.company.name(),
        requestDate: faker.date.past().toISOString().split("T")[0],
        paidDate: status === "paid" ? faker.date.recent().toISOString().split("T")[0] : null,
        paymentMethod:
            status === "paid" ? faker.helpers.arrayElement(["Credit Card", "Bank Transfer", "Cash", "Check"]) : null,
        expenseType: faker.helpers.arrayElement(["Office Supplies", "Travel", "Equipment", "Services", "Marketing", null]),
        status: status,
    }
}

const generateMockPurchaseInvoices = (count: number): PurchaseInvoice[] => {
    return Array.from({ length: count }, generateMockPurchaseInvoice)
}

export { generateMockPurchaseInvoices }

