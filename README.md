# cryptosimulator

Built during a 24 hour 'hack-day' at salt to create a MVP of a fullstack application using .NET Web API, EF & React.

Simulates buying and selling BTC at current prices (fetched from external API) to see which fictional investments have been profitable and which have not.

Steps to run:

- docker-compose up -d
- dotnet restore
- dotnet ef database update
- dotnet run
