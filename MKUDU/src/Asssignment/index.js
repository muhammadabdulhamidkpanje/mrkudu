
const Assignment = ()=>{
    const assigmnentData = [{tittle:"Term paper on Blockchsin Technology",
                            content:"Abstract—Blockchain, the foundation of Bitcoin, has received extensive attentions recently. Blockchain serves as an immutable ledger which allows transactions take place in a decentralized manner. Blockchain-based applications are springing up, covering numerous ﬁelds including ﬁnancial services, reputation system and Internet of Things (IoT), and so on. However, there are still many challenges of blockchain technology such as scalability and security problems waiting to be overcome. This paper presents a comprehensive overview on blockchain technology. We provide an overview of blockchain architechture ﬁrstly and compare some typical consensus algorithms used in different blockchains. Furthermore, technical challenges and recent advances are brieﬂy listed. We also lay out possible future trends for blockchain. Index Terms—Blockchain, decentralization, consensus, scalabilityI. INTRODUCTION Nowadays cryptocurrency has become a buzzword in both industry and academia. As one of the most successful cryptocurrency, Bitcoin has enjoyed a huge success with its capital market reaching 10 billion dollars in 2016 [1]. With a specially designed data storage structure, transactions in Bitcoin network could happen without any third party and the core technology to build Bitcoin is blockchain, which was ﬁrst proposed in 2008 and implemented in 2009 [2]. Blockchain could be regarded as a public ledger and all committed transactions are stored in a list of blocks. This chain grows as new blocks are appended to it continuously. Asymmetric cryptography and distributed consensus algorithms have been implemented for user security and ledger consistency. The blockchain technology generally has key characteristics of decentralization, persistency, anonymity and auditability. With these traits, blockchain can greatly save the cost and improve the efﬁciency. Since it allows payment to be ﬁnished without any bank or any intermediary, blockchain can be used in various ﬁnancial services such as digital assets, remittance and online payment [3], [4]. Additionally, it can also be applied into other ﬁelds including smart contracts [5], public services [6], Internet of",
                            },]
                            return(
                                <section className=" mt-16 ml-8 mr-8 pt-2 h-1/2 ">
                                    {assigmnentData.map((data)=>(
                                        <div>
                                            <h2 className="text-center font-serif  uppercase text-3xl xl:text-4xl">
                                                {data.tittle}
                                            </h2>
                                            <p className=" text-justify">{data.content}</p>
                                        </div>
                                    ))}
                                </section>
                            )
}

export default Assignment